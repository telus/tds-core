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
var mime = require('mime');

// All files to be uploaded must have a name matching this pattern
var FILENAME_PATTERN = /\.min\.(css|js)/;

// ACL for the relase folder and files on S3
var S3_PERMISSIONS = 'public-read';

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
 * @param key S3 key corresponding to the path and ending with
 *     a trailing slash, e.g. production/thoriu/module/version/
 * @param callback to execute once the remote path exists (is created,
 *     or is discovered to pre-exist).
 */
function createReleaseDir(key, callback) {
  s3.headObject({ Key: key }, function (err, data) {
    if (!err) {
      // No error - the release dir already exists
      return callback(null, key);
    } else if (err.code !== 'NotFound') {
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
 * @param dir path to the files' directory
 * @param callback function to execute with the file list
 */
function buildFileList(dir, callback) {
  fs.readdir(dir, (err, files) => {
    if (err) return callback(err, []);

    callback(null, files.reduce((acc, curr) => {
      if (curr.match(FILENAME_PATTERN)) {
        acc.push(path.resolve(dir, curr));
        return acc;
      }

      return acc;
    }, []));
  });
}

/**
 * Upload a file from the given path to S3.
 * @param filePath Full path to the source file
 * @param keyPrefix S3 key will be created by combining keyPrefix and the
 *     file's basename. keyPrefix must have a trailing slash.
 * @param callback to be passed any error, and the full S3 object key
 */
function uploadFile(filePath, keyPrefix, callback) {
  fs.readFile(filePath, (readErr, fileData) => {
    if (readErr) return callback(readErr, filePath);

    var fileParts = path.parse(filePath);
    var key = keyPrefix + fileParts.base;

    s3.headObject({ Key: key }, (headErr, data) => {
      if (!headErr) {
        return callback(new Error('Key already exists'), key);
      } else if (headErr.code === 'NotFound') {
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

var s3 = new aws.S3({
  params: {
    Bucket: BUCKET_NAME
  }
});

// Get the local directory path to the node module
var MODULE_PATH = path.resolve(__dirname, '..', MODULE_NAME);

// Read the version from the module's package.json file
var VERSION = 'v' + require(path.resolve(MODULE_PATH, 'package.json')).version;

logger.info('Releasing', MODULE_NAME, 'module', VERSION, 'to CDN');

// Build the S3 path prefix for all files in this release. Ex:
//     production/thorium/core/v0.1.0/
var versionedModuleKey = ENVIRONMENT + '/thorium/' + MODULE_NAME + '/' + VERSION + '/';

createReleaseDir(versionedModuleKey, function (err, keyCreated) {
  if (err) return logger.error(err);

  var sourceDir = path.resolve(MODULE_PATH, 'dist');

  logger.info('Release folder is ready:', keyCreated);
  logger.info('Uploading files from ', sourceDir);

  buildFileList(sourceDir, (err, files) => {
    if (err) return logger.error(err);

    files.forEach((file) => {
      uploadFile(file, keyCreated, (err, fileKey) => {
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
