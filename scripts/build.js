#!/usr/bin/env node

/* eslint-disable no-console */

const { exec, spawnSync } = require('child_process')

exec('./node_modules/.bin/lerna updated --json', (error, stdout) => {
  if (stdout === '') {
    console.log('No components have been changed, nothing to do. Exiting.')
  } else {
    const updatedPackages = JSON.parse(stdout)

    const packageNames = updatedPackages.map(packageObject => packageObject.name)
    const scopeGlob = packageNames.length === 1 ? packageNames[0] : `{${packageNames.join(',')}}`

    spawnSync(
      './node_modules/.bin/lerna',
      [
        'exec',
        '--scope',
        scopeGlob,
        '--ignore',
        '@tds/shared-*',
        '--',
        '$LERNA_ROOT_PATH/scripts/build.sh',
      ],
      {
        stdio: 'inherit',
      }
    )
    spawnSync(
      './node_modules/.bin/lerna',
      ['run', '--scope', scopeGlob, '--ignore', '@tds/shared-*', 'build'],
      {
        stdio: 'inherit',
      }
    )
  }
})
