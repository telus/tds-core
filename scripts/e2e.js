#!/usr/bin/env node

const { spawnSync } = require('child_process')
const parseArgs = require('minimist')

const getUpdatedPackageNames = require('./utils/getUpdatedPackageNames')

getUpdatedPackageNames(packageNames => {
  const parsedArgs = parseArgs(process.argv.slice(2))
  const onlyCorePackages = packageNames.filter(name => name.startsWith('@tds/core-')).join(' ')

  const { status } = spawnSync(
    './node_modules/.bin/nightwatch',
    ['-c', './config/nightwatch.conf.js', '--env', 'headless'],
    {
      env: Object.assign({}, process.env, {
        PACKAGES: onlyCorePackages,
        UPDATE_SCREENSHOTS: parsedArgs.i,
        UPDATE_ALL_SCREENSHOTS: parsedArgs.u,
      }),
      stdio: 'inherit',
    }
  )

  if (status !== 0) {
    process.exit(status)
  }
})
