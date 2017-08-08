#!/usr/bin/env node

// Environment: These variables must be available in the environment.
//  AWS_ACCESS_KEY_ID
//  AWS_SECRET_ACCESS_KEY

// Arguments
//  1 = staging|production; The environment to deploy. Determines which S3 bucket to use. Defaults to "staging"

// Dependencies
//  s3-website: https://github.com/klaemo/s3-website



// THIS SCRIPT DEPLOYS THE V0.18.1 VERSION OF THE DOCS TO A FOLDER IN STAGING. IT SHOULD BE REMOVED SOON.


if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
  console.error("'AWS_ACCESS_KEY_ID' and 'AWS_SECRET_ACCESS_KEY' must be available in the environment.");
  process.exit(1);
}


const resolvePath = require('path').resolve;
const relativePath = require('path').relative;
const readDirSync = require('fs').readdirSync;
const deploy = require('s3-website').deploy;
const AWS = require('aws-sdk');

const uploadDir = resolvePath('old-docs/');

// Holding off on using the version for now. Will need DNS changes to properly get versioned folders in the bucket.
// const version = require(resolvePath('package.json')).version;
const env = process.argv[2] || 'staging';

const config = {
  region: 'us-east-1',
  domain: `cdn.telus-thorium-doc-${env}`,
  prefix: 'v0.18.1',
  uploadDir: uploadDir,
  lockConfig: true
};
const s3 = new AWS.S3({region: config.region});


const deployToS3 = (onDeploy) => {
  deploy(s3, config, (err, website) => {
    if (err) {
      throw err;
    }

    console.log(website);

    onDeploy(s3);
  });
};

const putObjectAcl = (key) => {
  const params = {
    Bucket: 'cdn.telus-thorium-doc-staging',
    ACL: 'public-read',
    Key: `v0.18.1/${key}`
  };

  s3.putObjectAcl(params, (err, data) => {
    if( !err ) {
      console.log(data);
    }
  });
};


deployToS3(() => {

  // FIXME: There seems to be something wrong with the permissions when uploading via s3-website. Objects are not public readable by default.
  [
    'old-docs/1-About', 'old-docs/2-Use-TDS', 'old-docs/3-Foundational-Elements', 'old-docs/4-Global Components', 'old-docs/5-Block Components', 'old-docs/6-Blocks',
    'old-docs/assets/bundles', 'old-docs/assets/bundles/images', 'old-docs/assets/css',
    'old-docs/assets/downloads',
    'old-docs/assets/fonts', 'old-docs/assets/fonts/helvetica/etext-45-light', 'old-docs/assets/fonts/helvetica/etext-55-roman', 'old-docs/assets/fonts/helvetica/etext-65-medium',
    'old-docs/assets/images',
    'old-docs/assets/js',
    'old-docs/assets/plugins',
    'old-docs/assets/templates',
    'old-docs/examples',
  ].forEach((directory) => {
    readDirSync(directory)
      .forEach((file) => {
        const absoluteFilePath = resolvePath(directory, file);

        putObjectAcl(relativePath(resolvePath('old-docs'), absoluteFilePath))
      });
  });

});
