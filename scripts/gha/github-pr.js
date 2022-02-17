#!/usr/bin/env node
/* eslint-disable no-console */

// Environment: These variables must be available in the environment.
// GITHUB_TOKEN
// GITHUB_REPOSITORY
// GITHUB_PULL_REQUEST
// GITHUB_REF_NAME

const request = require('request')
const { spawnSync } = require('child_process')

if (
  !process.env.GITHUB_TOKEN ||
  !process.env.GITHUB_REPOSITORY ||
  !process.env.GITHUB_PULL_REQUEST
) {
  console.error(
    "'GITHUB_TOKEN', 'GITHUB_REPOSITORY', and 'GITHUB_PULL_REQUEST' must be available in the environment."
  )
  process.exit(1)
}

const { output } = spawnSync('scripts/prePr.sh')

const formattedVersions = (output[1].toString('utf8').match(/(\s-.*)*/g) || [])
  .join('')
  .replace(/\s-\s/g, '\n- ')

const links = `
Links:

- [Cartesian Components](http://telus-design-system-docs.s3-website-us-east-1.amazonaws.com/pr/${process.env.GITHUB_PULL_REQUEST}/e2e/)
- [Documentation](http://telus-design-system-docs.s3-website-us-east-1.amazonaws.com/pr/${process.env.GITHUB_PULL_REQUEST}/docs/)
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
  url: `https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/issues/${process.env.GITHUB_PULL_REQUEST}/comments`,
  headers: {
    'User-Agent': 'TDS',
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
  json: true,
  body: {
    body,
  },
})
