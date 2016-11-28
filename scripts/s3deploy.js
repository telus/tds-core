/**
 * s3deploy.js uploads files from the dist directory of a thorium module
 * to the CDN on Amazon S3.
 *
 * Usage:
 *     node s3deploy.js [bucket] [module name] [environment]
 *
 * Example:
 *     node s3deploy.js cdn.telus-digital core production
 *     node s3deploy.js cdn.telus-digital enriched test
 *
 * Objects that already exist on S3 will not be overwritten by this script.
 */

var fs = require('fs');
var path = require('path');
var aws = require('aws-sdk');
var log4js = require('log4js');
var mime = require('mime-types');

// All files to be uploaded must have a name matching this pattern
var FILENAME_PATTERN = /\.min\.(css|js)/;

// ACL to use for the files being released to S3
var S3_PERMISSIONS = 'public-read';

// Value assigned to err.code by the AWS SDK when the given Object Key is not
// found on S3.
var AWS_ERR_NOTFOUND = 'NotFound';

var logger = log4js.getLogger();

// Ensure that all the required CLI args have been given
if (process.argv.length !== 5) {
  logger.error('Usage: node s3deploy.js [bucket] [module name] [environment]');
  logger.error('Example: node s3deploy.js cdn.telus-thorium core production');
  process.exit(1);
}

var BUCKET_NAME = process.argv[2];
var MODULE_NAME = process.argv[3];
var ENVIRONMENT = process.argv[4];

/**
 * Create a directory on the CDN to host this version of the module. If
 * the key already exists, it won't be touched.
 *
 * @param {String} key S3 key corresponding to the path and ending with
 *     a trailing slash, e.g. production/thoriu/module/version/
 * @param {Function} callback to execute once the remote path exists (is created,
 *     or is discovered to pre-exist).
 */
function createReleaseDir(key, callback) {
  s3.headObject({ Key: key }, function (err, data) {
    if (!err) {
      logger.warn('S3 key already exists:', key);

      return callback(null, key);
    } else if (err.code !== AWS_ERR_NOTFOUND) {
      // Unexpected error
      return callback(err, key);
    }

    // Create the release dir object since it doesn't exist
    var params = {
      Key: key,
      ACL: S3_PERMISSIONS
    };

    s3.putObject(params, (errPut, data) => callback(errPut, key));
  });
}

/**
 * Accumulate a list of files that should be uploaded to S3.
 *
 * @param {String} dir path to the files' directory
 * @param {Function} callback function to execute with the file list
 */
function buildFileList(dir, callback) {
  fs.readdir(dir, (err, files) => {
    if (err) return callback(err, []);

    var releaseFiles = files.reduce((acc, curr) => {
      if (curr.match(FILENAME_PATTERN)) {
        acc.push(path.resolve(dir, curr));
        return acc;
      }

      return acc;
    }, []);

    callback(null, releaseFiles);
  });
}

/**
 * Upload a file from the given path to S3. The final object key is constructed
 * by prefixing keyPrefix to the file's basename. Ex:
 *
 * Calling:
 *
 *     uploadFile('/path/to/myfile.css', 'production/thorium/core/v0.1.0', () => null)
 *
 * Results in:
 *
 *     s3:::some_bucket/production/thorium/core/v0.1.0/myfile.css
 *
 * Objects that already exist on S3 will not be overwritten.
 *
 * @param {String} filePath Full path to the source file
 * @param {String} keyPrefix S3 key will be created by combining keyPrefix and
 *     the file's basename. keyPrefix must have a trailing slash.
 * @param {Function} callback to be passed any error, and the full S3 object key
 */
function uploadFile(filePath, keyPrefix, callback) {
  fs.readFile(filePath, (readErr, fileData) => {
    if (readErr) return callback(readErr, filePath);

    var fileParts;

    try {
      fileParts = path.parse(filePath);
    } catch (parseErr) {
      return callback(parseErr);
    }

    if (!fileParts.base) {
      return callback(new Error('Unable to get basename of ' + filePath));
    }

    if (!fileParts.ext) {
      return callback(new Error('Unable to get file extension of ' +
        filePath));
    }

    var key = keyPrefix + fileParts.base;

    s3.headObject({ Key: key }, (headErr, data) => {
      if (!headErr) {
        return callback(new Error('Key already exists'), key);
      } else if (headErr.code === AWS_ERR_NOTFOUND) {
        var params = {
          Key: key,
          ACL: S3_PERMISSIONS,
          Body: fileData,
          ContentType: mime.lookup(fileParts.ext)
        };

        return s3.upload(params, (err, data) => callback(err, key));
      }

      callback(headErr, key);
    });
  });
}

/**
 * Build the versioned "path" that prefixes the S3 object keys for each file
 * that is released. The path is assembled according to this pattern:
 *
 *     [environment]/thorium/[module]/[version]/
 *
 * Ex:
 *     production/thorium/core/v0.1.0/
 *
 * @param {String} s3Env Environment name, e.g. "test", "production"
 * @param {String} moduleName Name of module being released,
 *     e.g. "core", "enriched"
 * @param {String} version Version of the module being released, e.g. "v0.1.0"
 * @returns {string}
 */
function buildVersionedS3Path(s3Env, moduleName, version) {
  return s3Env + '/thorium/' + moduleName + '/' + version + '/';
}

// Instantiate the S3 SDK with default settings
var s3 = new aws.S3({
  params: {
    Bucket: BUCKET_NAME
  }
});

// Get the local directory path to the node module being released.
// Ex: /path/to/projects/telus-thorium-core/core
var MODULE_PATH = path.resolve(__dirname, '..', MODULE_NAME);

// Read the version from the module's package.json file
var VERSION = 'v' + require(path.resolve(MODULE_PATH, 'package.json')).version;

// Build the path prefix for each file's S3 object key
var releasePath = buildVersionedS3Path(ENVIRONMENT, MODULE_NAME, VERSION);

logger.info('Releasing', MODULE_NAME, 'module', VERSION, 'to CDN');
logger.info('S3 Object Key prefix:', releasePath);

createReleaseDir(releasePath, function (err) {
  if (err) return logger.error(err);

  // Look for files in /path/to/telus-thorium-core/[module name]/dist/*.*
  var sourceDir = path.resolve(MODULE_PATH, 'dist');

  logger.info('Releasing to', releasePath);
  logger.info('Uploading files from', sourceDir);

  buildFileList(sourceDir, (err, files) => {
    if (err) return logger.error(err);

    files.forEach((file) => {
      uploadFile(file, releasePath, (err, fileKey) => {
        if (err) {
          if (err.message === 'Key already exists') {
            return logger.warn('S3 object already exists, skipping', fileKey);
          }

          return logger.error(err);
        }

        logger.info('Uploaded', fileKey);
      });
    })
  });
});
