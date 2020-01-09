#!/usr/bin/env node

/*
Usage: npm run test:e2e [component name...] [options] [lerna options]

  By default, only updated packages will be tested.
  All lerna options will be forwarded onto lerna commands.

  Options:

    [component name...]       space separated list of package names to test
    -a, --all                 test all packages
    -u, --update-screenshots  update baseline images on failure
    -n, --name                e2e slug name (usually branch name)
*/

const { spawnSync } = require('child_process')
const { tdsOptions } = require('./utils/parseArgs')

const getPackageNames = require('./utils/getPackageNames')

getPackageNames(packageNames => {
  if (!tdsOptions.name) {
    // eslint-disable-next-line no-console
    console.log(
      'FATAL ERROR: E2E slug not specified. Please specify the branch E2E slug (usually the branch name) using the `-n` flag.'
    )
    process.exit(1)
  }
  const onlyCorePackages = packageNames.filter(name => name.startsWith('@tds/core-')).join(' ')

  const environments = 'chrome,firefox,safari,edge,ie11'

  const { status } = spawnSync(
    'npx',
    [
      'nightwatch',
      '-c',
      './config/nightwatch.saucelabs.conf.js',
      '--retries',
      '3',
      '-e',
      environments,
    ],
    {
      env: Object.assign({}, process.env, {
        PACKAGES: onlyCorePackages,
        UPDATE_ALL_SCREENSHOTS: tdsOptions['update-screenshots'],
        URL: `http://telus-design-system-docs.s3-website-us-east-1.amazonaws.com/e2e/${
          tdsOptions.name
        }/#`,
      }),
      stdio: 'inherit',
    }
  )

  if (status !== 0) {
    process.exit(status)
  }
})
