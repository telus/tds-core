/* eslint-disable no-unused-expressions */
const { accessibilityScan, visualScan } = require('../tests/steps/common.steps')

const buttonPage = {
  visitPage(browser) {
    const url = `${browser.launch_url}/#!/Button`

    browser.url(url)
    this.waitForElementVisible('@header')

    return this
  },

  accessibilityScan(browser) {
    accessibilityScan(browser, this)
    return this
  },

  visualScan(browser, fileName) {
    visualScan(browser, this, fileName)
    return this
  },
}

module.exports = {
  commands: [buttonPage],
  elements: {
    header: { selector: '[id="button"]' },
  },
}
