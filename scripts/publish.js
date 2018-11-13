#!/usr/bin/env node

/* eslint-disable no-console */

/*
Usage: npm run lerna:publish [component name...] [options] [lerna options]

  By default, only updated packages will be built.
  All lerna options will be forwarded onto lerna commands.

  Options:

    [component name...]       space separated list of package names to build
*/

const { spawnSync } = require('child_process')
const readline = require('readline')

const getPackageNames = require('./utils/getPackageNames')
const arrayToGlob = require('./utils/arrayToGlob')
const { lernaOptions } = require('./utils/parseArgs')

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

getPackageNames(packageNames => {
  console.warn(`You are about to publish the following packages: ${packageNames}`)

  read.question(
    'Are these the exact packages you wish to publish? (You will be prompted after this for versioning confirmation) (y/n) ',
    answer => {
      if (answer === 'Y' || answer === 'y') {
        spawnSync(
          'npx',
          [
            'lerna',
            'publish',
            '--conventional-commits',
            '--scope',
            arrayToGlob(packageNames),
          ].concat(lernaOptions),
          {
            stdio: 'inherit',
          }
        )
      } else {
        console.log('Publishing aborted! Try again by specifying the packages you wish to publish.')
        console.log('Ex: npm run lerna:publish @tds/core-component @tds/core-other-component')
      }

      read.close()
    }
  )
})
