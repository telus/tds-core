/* eslint-disable no-unused-expressions */
const { accessibilityScan, visualScan } = require('../tests/steps/common.steps')

const coloursPage = {
  visitPage(browser) {
    const url = `${browser.launch_url}/#!/Colours`

    browser.url(url)
    this.waitForElementVisible('@header').expect.element('@backToSpa').to.be.visible

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
  commands: [coloursPage],
  elements: {
    header: { selector: '[id="colours"]' },
    backToSpa: { selector: '[title = "Show all components"]' },
  },
}
