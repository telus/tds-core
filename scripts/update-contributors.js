#!/usr/bin/env node
/* eslint-disable no-console */

const { spawnSync } = require('child_process')

const filteredNames = ['renovate-bot']

const people = spawnSync('all-contributors', ['check'], {
  stdio: 'pipe',
  encoding: 'utf-8',
})

const peopleList = people.output[1].slice(people.output[1].indexOf('\n', 25)).split(',')

peopleList
  .map(name => name.trim())
  // filter out empty names
  .filter(name => name.length > 0)
  // filter out bots
  .filter(name => !filteredNames.includes(name))
  .forEach(name => {
    spawnSync('all-contributors', ['add', name, 'tds'])
    console.log(`Added ${name} as a contributor.`)
  })

spawnSync('all-contributors', ['generate'], {
  stdio: 'inherit',
})

spawnSync('git', ['add', '.all-contributorsrc', 'README.md'])
