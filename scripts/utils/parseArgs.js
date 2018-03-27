const parseArgs = require('minimist')

const originalArgs = process.argv.slice(2)

const parsedArgs = parseArgs(originalArgs)
const lernaOptions = originalArgs.filter(arg => !parsedArgs._.includes(arg))

module.exports = {
  userPackageNames: parsedArgs._,
  lernaOptions,
}
