#!/usr/bin/env node

const { spawnSync } = require('child_process')

const getUpdatedPackageNames = require('./utils/getUpdatedPackageNames')

getUpdatedPackageNames(packageNames => {
  const onlyCorePackages = packageNames.filter(name => name.startsWith('@tds/core-')).join(' ')

  spawnSync(
    './node_modules/.bin/nightwatch',
    ['-c', './config/nightwatch.conf.js', '--env', 'headless'],
    {
      env: Object.assign({}, process.env, {
        PACKAGES: onlyCorePackages,
      }),
      stdio: 'inherit',
    }
  )
})
