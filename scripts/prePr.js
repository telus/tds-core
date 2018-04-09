#!/usr/bin/env node

/* eslint-disable no-console */

/*
Usage: node scripts/prePr.js

This script will give insight into the result of publishing given the current commit history. It is intended to be run
before making a Pull Request to ensure its integrity.
*/

const util = require('util')
const chalk = require('chalk')

const conventionalRecommendedBump = util.promisify(require(`conventional-recommended-bump`))

const getUpdatedPackageNames = require('./utils/getUpdatedPackageNames')

const colorizeReleaseType = releaseType => {
  if (releaseType === 'major') {
    return chalk.red(releaseType)
  }

  if (releaseType === 'minor') {
    return chalk.yellow(releaseType)
  }

  return chalk.green(releaseType)
}

getUpdatedPackageNames(async packageNames => {
  Promise.all(
    packageNames.map(async packageName => {
      const recommendation = await conventionalRecommendedBump({
        preset: 'angular',
        lernaPackage: packageName,
      })

      return { packageName, ...recommendation }
    })
  ).then(recommendations => {
    if (recommendations.length === 0) {
      console.log('No components will be published, nothing to do. Exiting.')
      return
    }

    console.log('Publishing will result in the following version bumps\r\n')

    recommendations.forEach(({ packageName, reason, releaseType }) => {
      console.log(
        `- ${chalk.bold(packageName)} will receive a ${colorizeReleaseType(
          releaseType
        )} version bump.`
      )
      console.log(`  > Reason: ${reason}.`)
    })

    console.log(
      `\r\nIf this is not what you expected, ensure that your commit messages follow the Conventional Commits specification: ${chalk.underline(
        'https://conventionalcommits.org'
      )}.`
    )
    console.log(
      '\r\nOtherwise, paste the entire output of the verifyPr task into the body of your Pull Request so that a maintainer can verify when publishing.'
    )
  })
})
