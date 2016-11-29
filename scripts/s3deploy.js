/**
 * s3deploy.js uploads files from the dist directory of a thorium module
 * to the CDN on Amazon S3.
 *
 * Usage:
 *     node s3deploy.js --bucket <bucket name> --module <module name> --environment <env name> [--latest]
 *
 * CLI flags:
 *
 *    -b, --bucket <name> Name of the AWS S3 bucket where files should be uploaded
 *    -m, --module <name> Name of the module to upload, e.g. "core", "enriched"
 *    -e, --environment <name> Name of the env folder to upload to on S3, e.g. "test", "production"
 *    -L, --latest If present, upload files to the "latest" folder in addition to their version folder
 *
 * Example:
 *     node s3deploy.js --bucket cdn.telus-digital --module core --environment production --latest
 *     node s3deploy.js --bucket cdn.telus-digital --module enriched --environment test
 *
 * Objects with a version number in their key/url will not be overwritten by
 * this script. Those in the "latest" folder will be uploaded (and possibly
 * overwritten) if the --latest CLI flag is used.
 */

var fs = require('fs');
var path = require('path');
var aws = require('aws-sdk');
var log4js = require('log4js');
var mime = require('mime-types');
var cli = require('commander');

// All files to be uploaded must have a name matching this pattern
var FILENAME_PATTERN = /\.min\.(css|js)/;

// ACL to use for the files being released to S3
var S3_PERMISSIONS = 'public-read';

// Value assigned to err.code by the AWS SDK when the given Object Key is not
// found on S3.
var AWS_ERR_NOTFOUND = 'NotFound';

var logger = log4js.getLogger();

cli
  .version('0.0.1')
  .option('-b,--bucket <name>', 'Bucket name')
  .option('-m,--module <name>', 'Module name')
  .option('-e,--environment <name>', 'Environment name')
  .option('-L,--latest', 'Deploy as latest')
  .parse(process.argv);

function isEmpty(str) {
  return (typeof str !== 'string' || !str || !str.length);
}

if (isEmpty(cli.bucket) || isEmpty(cli.module) || isEmpty(cli.environment)) {
  // Command.js exits the process when you call .help()
  cli.help();
}

logger.info('Bucket:', cli.bucket);
logger.info('Module:', cli.module);
logger.info('Environment:', cli.environment);
logger.info('Latest:', cli.latest === true);

// Instantiate the S3 SDK with default settings
var s3 = new aws.S3({
  params: {
    Bucket: cli.bucket
  }
});

/**
 * Create a directory on the CDN to host this version of the module. If
 * the key already exists, it won't be touched.
 *
 * @param {String} key S3 key corresponding to the path and ending with
 *     a trailing slash, e.g. production/thoriu/module/version/
*  @param {Object} options config object, ex: { logger: [Object] }
 * @param {Function} callback to execute once the remote path exists (is created,
 *     or is discovered to pre-exist).
 */
function createReleaseDir(key, options, callback) {
  s3.headObject({ Key: key }, function (err, data) {
    if (!err) {
      options.logger.warn('S3 key already exists:', key);

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
 * @params {Object} options configuration object
 * @param {Function} callback to be passed any error, and the full S3 object key
 */
function uploadFile(filePath, keyPrefix, options, callback) {
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
    var params = {
      Key: key,
      ACL: S3_PERMISSIONS,
      Body: fileData,
      ContentType: mime.lookup(fileParts.ext)
    };

    if (options && options.overwrite === true) {
      return s3.upload(params, (err, data) => callback(err, key));
    }

    s3.headObject({ Key: key }, (headErr, data) => {
      if (!headErr) {
        return callback(new Error('Key already exists'), key);
      } else if (headErr.code === AWS_ERR_NOTFOUND) {
        return s3.upload(params, (err, data) => callback(err, key));
      } else {
        callback(headErr, key);
      }
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

/**
 * Convert a semantic version string like v0.5.1 to the name of the "latest"
 * folder for that major version, like "v0-latest".
 *
 * @param {String} currSemanticVersion
 * @returns {String}
 */
function buildLatestFolderName(currSemanticVersion) {
  if (typeof currSemanticVersion !== 'string') {
    return null;
  }

  var matches = currSemanticVersion.match(/v?(\d+)\.(\d+)\.(\d+)/i);

  if (matches === null) {
    return null;
  }

  return 'v' + matches[1] + '-latest';
}

/**
 * Entry point function. Uploads files from the source path to the release
 * path on S3.
 *
 * @param {String} sourcePath Path to local directory containing files
 *     to be released
 * @param {String} releasePath Path on S3 where uploads should be placed
 * @param {Object} options Configuration object. Schema:
 *     {
 *         overwrite: true|false
 *     }
 */
function doRelease(sourcePath, releasePath, options) {
  createReleaseDir(releasePath, options, function (baseKeyErr) {
    if (baseKeyErr) return options.logger.error(baseKeyErr);

    options.logger.info('Sourcing files from', sourcePath);

    buildFileList(sourcePath, (indexErr, files) => {
      if (indexErr) return options.logger.error(indexErr);

      files.forEach((file) => {
        uploadFile(file, releasePath, options, (uploadErr, fileKey) => {
          if (uploadErr) {
            if (uploadErr.message === 'Key already exists') {
              return options.logger.warn('S3 key already exists, skipping', fileKey);
            }

            return options.logger.error(uploadErr);
          }

          options.logger.info('Uploaded', fileKey);
        });
      })
    });
  });
}

// Read the version from the module's package.json file
var CURR_VERSION = 'v' + require(path.resolve(__dirname, '..', cli.module, 'package.json')).version;

// Build the full path to the local directory containing files for release
var dist = path.resolve(__dirname, '..', cli.module, 'dist');

// Release to environmentName/thorium/moduleName/vX.Y.Z/
doRelease(
  dist,
  buildVersionedS3Path(cli.environment, cli.module, CURR_VERSION),
  {
    overwrite: false,
    logger: log4js.getLogger(CURR_VERSION)
  }
);

// Optionally release to environmentName/thorium/moduleName/latest/
if (cli.latest === true) {
  var latestFolderName = buildLatestFolderName(CURR_VERSION);

  if (!latestFolderName) {
    logger.error('Unable to build a "latest" folder name from ' + CURR_VERSION);
  } else {
    doRelease(
      dist,
      buildVersionedS3Path(cli.environment, cli.module, latestFolderName),
      {
        overwrite: true,
        logger: log4js.getLogger(latestFolderName)
      }
    );
  }
}
