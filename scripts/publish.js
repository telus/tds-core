#!/usr/bin/env node

/* eslint-disable no-console */

const { spawnSync } = require('child_process')
const readline = require('readline')

const getUpdatedPackageNames = require('./utils/getUpdatedPackageNames')
const arrayToGlob = require('./utils/arrayToGlob')

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

getUpdatedPackageNames(packageNames => {
  console.warn(`You are about to publish the following packages: ${packageNames}`)

  read.question(
    'Are these the exact packages you wish to publish? (You will be prompted after this for versioning confirmation) (y/n) ',
    answer => {
      if (answer === 'Y' || answer === 'y') {
        spawnSync(
          './node_modules/.bin/lerna',
          ['publish', '--conventional-commits', '--scope', arrayToGlob(packageNames)],
          {
            stdio: 'inherit',
          }
        )
      } else {
        console.log('Publishing aborted! Try again by specifying the packages you wish to publish.')
        console.log('Ex: yarn lerna:publish @tds/core-component @tds/core-other-component')
      }

      read.close()
    }
  )
})
