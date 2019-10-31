const { toComponentName } = require('../utils')
const { ignoredPackagesE2E } = require('../../config/constants')

const generateTest = (packageName, componentName) => ({
  [packageName]: browser => {
    const browserName = browser.options.desiredCapabilities.browserName || ''
    const browserVersion = browser.options.desiredCapabilities.version || 'headless'

    const url = `${browser.launch_url}/${componentName}`

    browser
      .url(url)
      .waitForElementVisible(`#${componentName}`, 5000)
      .checkAccessibility()
      .compareScreenshot(componentName, browserName, browserVersion)
      .end()
  },
})

const componentTests = process.env.PACKAGES.split(' ')
  .filter(packageName => !ignoredPackagesE2E.includes(packageName))
  .reduce((tests, packageName) => {
    const componentName = toComponentName(packageName)
    return Object.assign(tests, generateTest(packageName, componentName))
  }, {})

module.exports = componentTests
