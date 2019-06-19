#!/usr/bin/env node

/* eslint-disable no-console */

const { spawnSync } = require('child_process')
const fs = require('fs')

const rootScopes = ['deps', 'other'] // Scopes where modified files are typically in the repo's root.
const dotScopes = { github: '.github', vscode: '.vscode' } // Scopes that map to dotfolders
const bypassScopes = ['publish'] // Scopes that bypass the check and allow any file to be modified in a commit.
const excludedFiles = ['.all-contributorsrc', 'README.md'] // Files that can be modified with any scope.

const getCommitScope = () => {
  const commitMessage = fs.readFileSync(process.argv[3], 'utf8')
  const scope = commitMessage
    .substr(commitMessage.indexOf('('), commitMessage.indexOf(':') - commitMessage.indexOf('('))
    .replace(/(core)|(community)|(shared)|(util)|(-)|(\()|(\))/g, '')

  return dotScopes[scope] || scope
}

const commitScope = getCommitScope()

if (bypassScopes.indexOf(commitScope) === -1) {
  const gitDiff = spawnSync('git', ['diff', '--name-only', '--staged', 'HEAD'], {
    stdio: 'pipe',
    encoding: 'utf-8',
  })
    .output[1].trim()
    .split('\n')

  console.log('\nValidating commit scope...')

  gitDiff
    .map(diffFileName => diffFileName.replace('-', ''))
    .forEach(diffFileName => {
      if (
        diffFileName !== '' &&
        ((rootScopes.indexOf(commitScope) === -1 &&
          diffFileName.search(new RegExp(`^(.*(/+)|(/?))${commitScope}/`, 'i')) === -1) ||
          (rootScopes.indexOf(commitScope) !== -1 && diffFileName.search(/(\\)|(\/)/g) !== -1)) &&
        excludedFiles.indexOf(diffFileName) === -1
      ) {
        console.error(
          '\n',
          '\x1b[41m\x1b[37m',
          'COMMIT SCOPE ERROR:',
          '\x1b[0m',
          `Files outside the scope '${commitScope}' have been added to this commit. Please create seperate commits for files out of scope.`
        )
        process.exit(1)
      }
    })
}

console.log(
  '\n',
  '\x1b[42m\x1b[30m',
  'PASS:',
  '\x1b[0m',
  `Files staged for commit scope '${commitScope}' are valid.`
)
process.exit()
