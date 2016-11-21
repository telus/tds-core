var aws = require('aws-sdk');
var log4js = require('log4js');

var BUCKET_NAME = 'cdn.telus-thorium';

var logger = log4js.getLogger();

if (process.argv.length !== 3) {
  logger.error('Please pass an S3 object key via CLI args');
  process.exit(1);
}

var OBJECT_KEY = process.argv[2];
logger.info('Processing removal of', OBJECT_KEY);

var s3 = new aws.S3({
  params: {
    Bucket: BUCKET_NAME
  }
});

s3.listObjects({ Prefix: OBJECT_KEY }, function (errList) {
  if (errList) {
    logger.error('Error deleting', OBJECT_KEY, errList.message);
  } else {
    var params = {
      Delete: {
        Objects: [
          { Key: OBJECT_KEY }
        ],
        Quiet: true
      }
    };

    s3.deleteObjects(params, function (delErr) {
      if (delErr) {
        logger.error('Error deleting object from S3:', delErr.message);
      } else {
        logger.info('Successfully deleted', OBJECT_KEY);
      }
    });
  }
});