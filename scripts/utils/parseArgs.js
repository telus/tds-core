const parseArgs = require('minimist')

const TDS_OPTIONS = ['-a', '--all', '-u', '--update-screenshots']

const originalArgs = process.argv.slice(2)

const parsedArgs = parseArgs(originalArgs, { alias: { a: 'all', u: 'update-screenshots' } })
const lernaOptions = originalArgs
  .filter(arg => !parsedArgs._.includes(arg))
  .filter(arg => !TDS_OPTIONS.includes(arg))

const tdsOptions = Object.assign({}, parsedArgs)
delete tdsOptions._

module.exports = {
  userPackageNames: parsedArgs._,
  tdsOptions,
  lernaOptions,
}
