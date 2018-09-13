const argv = require('yargs').argv
const request = require('request')
const { spawnSync } = require('child_process')

if (!argv.repo || !argv.githubToken || !argv.pullRequest) {
  return
}

const { output } = spawnSync('node', ['scripts/prePr.js', '--conventional-commits', '--yes'])
const changes = output[1].toString('utf8')

request.post({
  url: `https://api.github.com/repos/${argv.repo}/issues/${argv.pullRequest}/comments`,
  headers: {
    'User-Agent': 'TDS',
    Authorization: `token ${argv.githubToken}`
  },
  json: true,
  body: {
    body: `\`\`\`
${changes.trim()}
\`\`\``
  }
}, (err, status, body) => {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Upload successful!  Server responded with:', body);
})
