/* eslint-disable no-console */

const { exec } = require('child_process')
const { userPackageNames, tdsOptions, lernaOptions } = require('./parseArgs')

const getPackageNames = callback => {
  if (userPackageNames.length > 0) {
    callback(userPackageNames)
    return
  }

  const command = tdsOptions.all ? 'ls' : 'updated'

  exec(`npx lerna ${command} --json ${lernaOptions.join(' ')}`, (error, stdout) => {
    if (stdout === '') {
      console.log('No components have been changed, nothing to do. Exiting.')
      process.exit(0)
    } else {
      const updatedPackages = JSON.parse(stdout)
      const packageNames = updatedPackages.map(packageObject => packageObject.name)

      callback(packageNames)
    }
  })
}

module.exports = getPackageNames
