#!/usr/bin/env node

// Usage notes
// Nightwatch CLI options http://nightwatchjs.org/guide#command-line-options
// Pass -u to update baseline images while running e2e tests
// Pass -a to test all packages regardless if they've been updated
// Pass the name of the package you wish to test such as `@tds/core-link`

const { spawnSync } = require('child_process')
const parseArgs = require('minimist')
const getUpdatedPackageNames = require('./utils/getUpdatedPackageNames')

const parsedArgs = parseArgs(process.argv.slice(2))

const runE2e = packageNames => {
  const onlyCorePackages = packageNames.filter(name => name.startsWith('@tds/core-')).join(' ')

  const { status } = spawnSync(
    './node_modules/.bin/nightwatch',
    ['-c', './config/nightwatch.conf.js', '--env', 'headless'],
    {
      env: Object.assign({}, process.env, {
        PACKAGES: onlyCorePackages,
        UPDATE_ALL_SCREENSHOTS: parsedArgs.u,
      }),
      stdio: 'inherit',
    }
  )

  if (status !== 0) {
    process.exit(status)
  }
}

getUpdatedPackageNames(packageNames => runE2e(packageNames), parsedArgs.a ? 'ls' : 'updated')
