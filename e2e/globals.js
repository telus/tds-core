/* eslint-disable no-console */
const path = require('path')
const chromedriver = require('chromedriver')
const request = require('request')
const config = require('./config/index')

const SCREENSHOT_PATH = './e2e/tests/failure-screenshots/'

const getFileName = testName => {
  const name = testName.replace(/ /g, '_')
  return path.resolve(`${SCREENSHOT_PATH}${name}.png`)
}

let counter = 0

const healthCheck = done => {
  console.log(`${counter}/20 Health Checking the UI Container...`)
  request(config.healthCheckUrl, (err, response, body) => {
    if (!body && counter < 20) {
      counter += 1
      setTimeout(healthCheck, 6000, done)
    } else {
      done()
    }
  })
}

module.exports = {
  before(done) {
    chromedriver.start()
    console.log('Started chromedriver')
    healthCheck(done)
  },

  after(done) {
    chromedriver.stop()
    console.log('Stopped chromedriver')
    done()
  },

  afterEach: (client, done) => {
    const weHaveFailures =
      client.currentTest.results.errors > 0 || client.currentTest.results.failed > 0
    if (weHaveFailures) {
      if (!client.sessionId) {
        // console.log('Session already ended.')
        done()
        return
      }

      const testName = client.currentTest.module
      // console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~ ${testName}`)
      const time = client.currentTest.results.time
      const fileName = getFileName(`${testName}${time}`)
      client.saveScreenshot(fileName, result => {
        if (!result || result.status !== 0) {
          console.log('Error saving screenshot...', result)
        }
      })
    }

    client.end(done)
  },
}
