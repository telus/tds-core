#!/usr/bin/env node
/* eslint-disable no-console */

const { spawnSync } = require('child_process')

const filteredNames = ['renovate-bot']

const people = spawnSync('all-contributors', ['check'], {
  stdio: 'pipe',
  encoding: 'utf-8',
})

const peopleList = people.output[1].slice(people.output[1].indexOf('\n', 25)).split(',')

const trimList = peopleList.map(name => {
  if (name.trim() !== '') {
    return name.trim()
  }
  return null
})

if (trimList.length > 0) {
  trimList.map(name => {
    if (filteredNames.indexOf(name) === -1 && name !== null) {
      spawnSync('all-contributors', ['add', name, 'tds'])
      console.log(`Added ${name} as a contributor.`)
      return true
    }
    return false
  })
} else {
  console.log('Contributor list up to date.')
}

spawnSync('all-contributors', ['generate'], {
  stdio: 'inherit',
})
