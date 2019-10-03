/* eslint-disable no-console */
const request = require('request')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./visual/webpack.config.js')
const { healthCheckUrl } = require('./config')

let counter = 0
const healthCheck = done => {
  request(healthCheckUrl, (err, response, body) => {
    if (!body && counter < 20) {
      console.log(`${counter}/20 waiting for the styleguide to start. Please wait...`)
      counter += 1

      setTimeout(healthCheck, 3000, done)
    } else {
      done()
    }
  })
}

const server = new WebpackDevServer(
  webpack(config),
  Object.assign({}, config.devServer, { hot: false, inline: false })
)
module.exports = {
  asyncHookTimeout: 120000,
  before: done => {
    console.log('Setting up e2e tests...')

    server.listen(config.devServer.port, 'localhost', err => {
      healthCheck(done)
      if (err) {
        console.error(err)
      }
    })
  },
  after: done => {
    console.log('Closing down e2e tests...')
    server.close(() => {
      done()
    })
  },
}
