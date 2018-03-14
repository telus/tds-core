/* eslint-disable no-console */
const { resolve } = require('path')
const chromedriver = require('chromedriver')
const request = require('request')

const { outputPath, healthCheckUrl } = require('./config')

const getFailureScreenshotName = currentTest => {
  const testName = currentTest.module
  const time = currentTest.results.time
  const fileName = `${testName}${time}`.replace(/ /g, '_')

  return resolve(outputPath, 'failure-screenshots', `${fileName}.png`)
}

let counter = 0

const healthCheck = done => {
  request(healthCheckUrl, (err, response, body) => {
    if (!body && counter < 20) {
      console.log(`${counter}/20 Health Checking the UI Container...`)
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

  // TODO: Come back to this. I don't think this gets called until after the file. We would want a failure screenshot
  // right after the test, not the entire file since we have many tests in one file.
  afterEach: (client, done) => {
    const weHaveFailures =
      client.currentTest.results.errors > 0 || client.currentTest.results.failed > 0
    if (weHaveFailures) {
      if (!client.sessionId) {
        console.log('Session already ended.')
        done()
        return
      }

      const fileName = getFailureScreenshotName(client.currentTest)
      client.saveScreenshot(fileName, result => {
        if (!result || result.status !== 0) {
          console.log('Error saving screenshot...', result)
        }
      })
    }

    console.log('after each')

    client.end(done)
  },
}
