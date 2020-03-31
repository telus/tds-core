/* eslint-disable no-console */

const { exec } = require('child_process')
const parseArgs = require('./parseArgs')
const { ignoredPackages } = require('../../config/constants')

const getPackageNames = (args, callback, forceUpdatedPackages) => {
  const { userPackageNames, tdsOptions, lernaOptions } = parseArgs(args)

  if (!forceUpdatedPackages && userPackageNames.length > 0) {
    callback(userPackageNames)
    return
  }

  const command = tdsOptions.all ? 'ls' : 'updated'

  exec(`npx lerna ${command} --json ${lernaOptions.join(' ')}`, (error, stdout) => {
    // Uncomment these lines for debugging
    // if (error) {
    //   console.error(error)
    //   process.exit(1)
    // }
    if (stdout === '') {
      console.log('No components have been changed, nothing to do. Exiting.')
      process.exit(0)
    } else {
      const updatedPackages = JSON.parse(stdout)
      const packageNames = updatedPackages.map(packageObject => packageObject.name)

      callback(packageNames.filter(el => !ignoredPackages.includes(el)))
    }
  })
}

module.exports = getPackageNames
