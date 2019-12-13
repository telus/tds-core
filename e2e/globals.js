/* eslint-disable no-console */
const request = require('request')
const { healthCheckUrl } = require('./config')

let counter = 0
const healthCheck = done => {
  request(healthCheckUrl, (err, response, body) => {
    if (!body && counter < 20) {
      console.log(`${counter}/20 waiting for the server to open. Please wait...`)
      counter += 1

      setTimeout(healthCheck, 3000, done)
    } else {
      done()
    }
  })
}
module.exports = {
  asyncHookTimeout: 120000,
  before: done => {
    console.log('Running e2e tests...')
    healthCheck(done)
  },
  after: done => {
    console.log('Closing down e2e tests...')
    done()
  },
}
