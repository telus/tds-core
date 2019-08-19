/* eslint-disable no-console */
process.env.STYLEGUIDIST_ENV = 'e2e'

const styleguidist = require('react-styleguidist')

const styleguideConfig = require('../config/styleguide.config')

let server = null

module.exports = {
  asyncHookTimeout: 120000,
  before: done => {
    console.log('Setting up e2e tests...')

    server = styleguidist(styleguideConfig).server((err, config) => {
      if (err) {
        console.log(err)
      } else {
        const url = `http://${config.serverHost}:${config.serverPort}`
        console.log(`Listening at ${url}`)
      }
    })

    server.compiler.hooks.afterCompile.tap('Compile complete', () => {
      console.log('Server ready')
      done()
    })
  },
  after: done => {
    console.log('Closing down e2e tests...')

    // TODO: this is an undocumented command in Styleguidist
    // and webpackdevserver, making it brittle
    // Ref, styleguidist: https://github.com/styleguidist/react-styleguidist/blob/8678c56560b850cc4866a52a3c4d3a5adb82356e/src/scripts/create-server.js#L35
    // Ref, webpackdevserver: https://stackoverflow.com/a/56169083
    server.app.close(() => done())
  },
}
