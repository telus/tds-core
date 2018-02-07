const chromedriver = require('chromedriver')

module.exports = {
  before(done) {
    chromedriver.start()
    done()
  },

  after(done) {
    chromedriver.stop()
    done()
  },

  afterEach: (client, done) => {
    const weHaveFailures =
      client.currentTest.results.errors > 0 || client.currentTest.results.failed > 0
    if (weHaveFailures) {
      if (!client.sessionId) {
        done()
        return
      }
    }

    client.end(done)
  },
}
