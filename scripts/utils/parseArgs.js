const { execSync } = require('child_process')
const minimist = require('minimist')

const TDS_OPTIONS = { a: 'all', u: 'update-screenshots', n: 'name', e: 'environment' }

const parseArgs = args => {
  let originalArgs = args.slice(2).filter(arg => arg !== '')

  if (originalArgs.length === 1) {
    originalArgs = originalArgs[0].split(' ')
  }

  const lernaOptions = []
  const lernaLS = execSync('npx lerna ls', { stdio: ['pipe'] })
    .toString('utf8')
    .trim()
    .split('\n')

  const parsedArgs = minimist(originalArgs, {
    alias: TDS_OPTIONS,
    unknown: arg => {
      if (lernaLS.includes(arg)) {
        return true
      }
      lernaOptions.push(arg)
      return false
    },
  })

  const userPackageNames = parsedArgs._

  const tdsOptions = { ...parsedArgs }
  delete tdsOptions._

  return {
    userPackageNames,
    tdsOptions,
    lernaOptions,
  }
}

module.exports = parseArgs
