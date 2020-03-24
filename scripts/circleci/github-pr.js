#!/usr/bin/env node
/* eslint-disable no-console */

// Environment: These variables must be available in the environment.
// GITHUB_TOKEN
// CIRCLE_PROJECT_REPONAME
// CIRCLE_PULL_REQUEST
// CIRCLE_BRANCH

const request = require('request')
const { spawnSync } = require('child_process')

if (
  !process.env.GITHUB_TOKEN ||
  !process.env.CIRCLE_PROJECT_REPONAME ||
  !process.env.CIRCLE_PULL_REQUEST ||
  !process.env.CIRCLE_BRANCH
) {
  console.error(
    "'GITHUB_TOKEN', 'CIRCLE_PROJECT_REPONAME', 'CIRCLE_PULL_REQUEST', and 'CIRCLE_BRANCH' must be available in the environment."
  )
  process.exit(1)
}

const { output } = spawnSync('scripts/prePr.sh')

const formattedVersions = (output[1].toString('utf8').match(/(\s-.*)*/g) || [])
  .join('')
  .replace(/\s-\s/g, '\n- ')

const links = `
Links:

- [Cartesian Components](http://telus-design-system-docs.s3-website-us-east-1.amazonaws.com/pr/${
  process.env.CIRCLE_BRANCH
}/e2e/)
`

const changes = `
Packages pending updates:\n${formattedVersions}\n\nIf this is not what you expected, ensure that your commit messages follow the TDS commit types guide on this page: https://tds.telus.com/contributing/developer-guide.html and try again.
`

const body = `
${links}

\`\`\`
${changes.trim()}
\`\`\`
`

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
    body,
  },
})
