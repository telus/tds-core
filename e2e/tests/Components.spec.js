const { rootSelector } = require('../config')
const { toComponentName } = require('../utils')
const { ignoredPackages } = require('../../config/constants')

const generateTest = (packageName, componentName) => ({
  [packageName]: browser => {
    const browserName = browser.options.desiredCapabilities.browserName || ''
    const browserVersion = browser.options.desiredCapabilities.version || 'headless'

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

const componentTests = process.env.PACKAGES.split(' ')
  .filter(packageName => !ignoredPackages.includes(packageName))
  .reduce((tests, packageName) => {
    const componentName = toComponentName(packageName)
    return Object.assign(tests, generateTest(packageName, componentName))
  }, {})

module.exports = componentTests
