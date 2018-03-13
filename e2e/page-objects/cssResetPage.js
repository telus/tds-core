/* eslint-disable no-unused-expressions */
const { accessibilityScan, visualScan } = require('../tests/steps/common.steps')

const cssResetPage = {
  visitPage(browser) {
    const url = `${browser.launch_url}/#!/CSS reset`

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
  commands: [cssResetPage],
  elements: {
    header: { selector: '[id="css-reset"]' },
  },
}
