#!/usr/bin/env node

// Environment: These variables must be available in the environment.
// GITHUB_TOKEN
// TRAVIS_REPO_SLUG
// TRAVIS_PULL_REQUEST

const request = require('request')
const { spawnSync } = require('child_process')


if (!process.env.GITHUB_TOKEN || !process.env.TRAVIS_REPO_SLUG || !process.env.TRAVIS_PULL_REQUEST) {
  console.error(
    "'GITHUB_TOKEN', 'TRAVIS_REPO_SLUG'., and 'TRAVIS_PULL_REQUEST' must be available in the environment."
  )
  process.exit(1)
}

const { output } = spawnSync('node', ['scripts/prePr.js', '--conventional-commits', '--yes'])
const changes = output[1].toString('utf8')

request.post({
  url: `https://api.github.com/repos/${process.env.TRAVIS_REPO_SLUG}/issues/${process.env.TRAVIS_PULL_REQUEST}/comments`,
  headers: {
    'User-Agent': 'TDS',
    Authorization: `token ${process.env.GITHUB_TOKEN}`
  },
  json: true,
  body: {
    body: `\`\`\`
${changes.trim()}
\`\`\``
  }
})
