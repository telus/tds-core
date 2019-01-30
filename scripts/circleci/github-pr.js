#!/usr/bin/env node
/* eslint-disable no-console */

// Environment: These variables must be available in the environment.
// GITHUB_TOKEN
// TRAVIS_REPO_SLUG
// CIRCLE_PULL_REQUEST

const request = require('request')
const { spawnSync } = require('child_process')

if (
  !process.env.GITHUB_TOKEN ||
  !process.env.CIRCLE_PROJECT_REPONAME ||
  !process.env.CIRCLE_PULL_REQUEST
) {
  console.error(
    "'GITHUB_TOKEN', 'CIRCLE_PROJECT_REPONAME'., and 'CIRCLE_PULL_REQUEST' must be available in the environment."
  )
  process.exit(1)
}

const { output } = spawnSync('scripts/prePr.sh')

const formattedVersions = (output[1].toString('utf8').match(/(\s-.*)*/g) || [])
  .join('')
  .replace(/\s-\s/g, '\n- ')

const changes = `Packages pending updates:\n${formattedVersions}\n\nIf this is not what you expected, ensure that your commit messages follow the TDS commit types guide on this page: https://tds.telus.com/contributing/developer-guide.html and try again.`
request.post({
  url: `https://api.github.com/repos/telus/${process.env.CIRCLE_PROJECT_REPONAME}/issues/${
    /[^/]*$/.exec(process.env.CIRCLE_PULL_REQUEST)[0]
  }/comments`,
  headers: {
    'User-Agent': 'TDS',
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
  json: true,
  body: {
    body: `\`\`\`
${changes.trim()}
\`\`\``,
  },
})
