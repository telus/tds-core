#!/usr/bin/env node

// Arguments
//  1 = The environment to deploy. Determines which S3 bucket to use.

const resolvePath = require('path').resolve;
const execSync = require('child_process').execSync;

const s3Website = resolvePath('node_modules/.bin/s3-website');
const uploadDir = resolvePath('styleguide/');

const version = require(resolvePath('package.json')).version;
const env = process.argv[2] || 'staging';

const deployToS3 = (prefix) => {
  execSync(
    `${s3Website} deploy ${uploadDir} --prefix ${prefix} --domain cdn.telus-digital.tds-docs`,
    { stdio: 'inherit' }
  );
};


if (env === 'production') {
  deployToS3(`prod/v${version}`);
  deployToS3("prod/latest");
}
else {
  deployToS3('staging');
}
