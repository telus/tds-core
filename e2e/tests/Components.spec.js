const { rootSelector } = require('../config')

const generateTest = componentName => ({
  [componentName]: browser => {
    const browserName = browser.globals.test_settings.desiredCapabilities.browserName || ''
    const browserVersion = browser.globals.test_settings.desiredCapabilities.version || 'headless'

    const url = `${browser.launch_url}/#!/${componentName}`

    browser
      .url(url)
      .waitForElementVisible(`#${componentName.toLowerCase()}`, 2000)
      .moveToElement(rootSelector, 0, 0)
      .checkAccessibility()
      .compareScreenshot(componentName, browserName, browserVersion)
      .end()
  },
})

module.exports = Object.assign(
  // { '@tags': ['Box', 'Button'] }, --> tags can be used to run specific tests http://nightwatchjs.org/guide#test-tags
  generateTest('Box'),
  generateTest('Button')
)
