/* eslint-disable no-console */

const { exec } = require('child_process')
const { userPackageNames, lernaOptions } = require('./parseArgs')

const getUpdatedPackageNames = (callback, operation = 'updated') => {
  if (userPackageNames.length > 0) {
    callback(userPackageNames)
    return
  }

  exec(
    `./node_modules/.bin/lerna ${operation} --json ${lernaOptions.join(' ')}`,
    (error, stdout) => {
      if (stdout === '') {
        console.log('No components have been changed, nothing to do. Exiting.')
      } else {
        const updatedPackages = JSON.parse(stdout)
        const packageNames = updatedPackages.map(packageObject => packageObject.name)

        callback(packageNames)
      }
    }
  )
}

module.exports = getUpdatedPackageNames
