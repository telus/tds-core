#!/usr/bin/env node

/* eslint-disable no-console */

// Environment: These variables must be available in the environment.
//  AWS_ACCESS_KEY_ID
//  AWS_SECRET_ACCESS_KEY

// Arguments
//  2 = staging|production;
//      The environment to deploy. Determines which S3 bucket to use and which styleguide to deploy.
//      Defaults to "staging"

// Dependencies
//  s3-website: https://github.com/klaemo/s3-website
//  aws-sdk

if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
  console.error(
    "'AWS_ACCESS_KEY_ID' and 'AWS_SECRET_ACCESS_KEY' must be available in the environment."
  )
  process.exit(1)
}

const resolvePath = require('path').resolve
const { deploy } = require('s3-website')
const AWS = require('aws-sdk')

const env = process.argv[2] || 'staging'
const { version } = require('../package.json')

const uploadDir = resolvePath('build', env)

const config = {
  region: 'us-east-1',
  domain: 'telus-design-system-docs',
  uploadDir,
  lockConfig: true,
  exclude: ['community/*'],
}
const s3 = new AWS.S3({ region: config.region })

const deployToS3 = prefix =>
  new Promise((resolve, reject) => {
    const deployConfig = Object.assign(config, { prefix })

    console.log(`Deploying to s3: ${deployConfig.domain}/${deployConfig.prefix}...`)

    deploy(s3, deployConfig, (err, website) => {
      if (err) {
        console.error(err)
        reject(err)
      } else {
        console.log(website)
        resolve()
      }
    })
  })

// Continue to deploy to the thorium bucket because http://tds.telus.com points there
const deployToS3Deprecated = () => {
  const deployConfig = Object.assign(config, {
    domain: `cdn.telus-thorium-doc-${env}`,
    prefix: env === 'production' ? undefined : 'latest',
  })

  console.log(`Deploying to s3: ${deployConfig.domain}/${deployConfig.prefix}...`)

  deploy(s3, deployConfig, (err, website) => {
    if (err) {
      throw err
    }

    console.log(website)
  })
}


if (env === 'production') {
  deployToS3('latest')
    .then(() => deployToS3(`v${version}`))
    // Continue to deploy to the thorium bucket because http://tds.telus.com points there
    // TODO: Rip this out when the domain name is pointed at the new bucket: TDS-286
    .then(() => deployToS3Deprecated())
} else {
  deployToS3('staging')
}
