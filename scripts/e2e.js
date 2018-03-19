#!/usr/bin/env node

/* eslint-disable no-console */

const { exec, spawnSync } = require('child_process')

exec('./node_modules/.bin/lerna updated --json', (error, stdout) => {
  if (stdout === '') {
    console.log('No components have been changed, nothing to do. Exiting.')
  } else {
    const updatedPackages = JSON.parse(stdout)

    const packageNames = updatedPackages
      .filter(packageObject => packageObject.name.startsWith('@tds/core-'))
      .map(packageObject => packageObject.name)
      .join(' ')

    spawnSync(
      './node_modules/.bin/nightwatch',
      ['-c', './config/nightwatch.conf.js', '--env', 'headless'],
      {
        env: Object.assign(process.env, {
          PACKAGES: packageNames,
        }),
        stdio: 'inherit',
      }
    )
  }
})
