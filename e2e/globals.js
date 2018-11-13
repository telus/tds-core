/* eslint-disable no-console */
const chromedriver = require('chromedriver')
const request = require('request')

const { healthCheckUrl } = require('./config')

let counter = 0
const healthCheck = done => {
  request(healthCheckUrl, (err, response, body) => {
    if (!body && counter < 20) {
      console.log(
        `${counter}/20 waiting for the styleguide to start. \`npm run dev:e2e\` to start it now...`
      )
      counter += 1

      setTimeout(healthCheck, 3000, done)
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
}
