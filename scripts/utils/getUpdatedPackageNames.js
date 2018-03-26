/* eslint-disable no-console */

const { exec } = require('child_process')

const getUpdatedPackageNames = callback => {
  const userPackages = process.argv.slice(2)

  if (userPackages.length > 0) {
    callback(userPackages)
    return
  }

  exec('./node_modules/.bin/lerna updated --json', (error, stdout) => {
    if (stdout === '') {
      console.log('No components have been changed, nothing to do. Exiting.')
    } else {
      const updatedPackages = JSON.parse(stdout)
      const packageNames = updatedPackages.map(packageObject => packageObject.name)

      callback(packageNames)
    }
  })
}

module.exports = getUpdatedPackageNames
