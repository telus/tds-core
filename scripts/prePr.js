#!/usr/bin/env node

/* eslint-disable no-console */

/*
Usage: npm run prepr

This script will give insight into the result of publishing given the current commit history. It is intended to be run
before making a Pull Request to ensure its integrity.
*/

const argv = require('yargs').argv

const chalk = require('chalk')
const emoji = require('node-emoji')

const { PublishCommand } = require('lerna')

/*
  Adapted from:

  * https://github.com/lerna/lerna/blob/v2.10.1/src/Command.js#L213-L216
  * https://github.com/lerna/lerna/blob/v2.10.1/src/commands/PublishCommand.js#L24
  *
  * WARNING! This interface is changing in lerna v3 and will need to be updated when we upgrade lerna.
*/
const publishCommand = new PublishCommand(argv._, argv, argv._cwd)
publishCommand.configureLogging()
publishCommand.runValidations()
publishCommand.runPreparations()

publishCommand.initialize(() => {
  console.log(
    `\r\n${emoji.get(
      'thinking_face'
    )} If this is not what you expected, ensure that your commit messages follow the Conventional Commits specification (${chalk.underline(
      'https://conventionalcommits.org'
    )}) and try again.`
  )
  console.log(
    `\r\n${emoji.get(
      'rocket'
    )} Please paste the entire output of this task into the body of your Pull Request so that a maintainer can verify before merging/publishing.`
  )
})
