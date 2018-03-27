#!/usr/bin/env node

/* eslint-disable no-console */

/*
Usage: yarn lerna:publish <component 1> <component 2> ... <other lerna options>

All options will be forwarded directly onto lerna commands.

Example: yarn lerna:publish @tds/core-select -- --since @tds/core-select@1.0.2
*/

const { spawnSync } = require('child_process')
const readline = require('readline')

const getUpdatedPackageNames = require('./utils/getUpdatedPackageNames')
const arrayToGlob = require('./utils/arrayToGlob')
const { lernaOptions } = require('./utils/parseArgs')

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
          ['publish', '--conventional-commits', '--scope', arrayToGlob(packageNames)].concat(
            lernaOptions
          ),
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
