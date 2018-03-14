const generateTest = componentName => ({
  [componentName]: browser => {
    const browserName = browser.globals.test_settings.desiredCapabilities.browserName || ''
    const browserVersion = browser.globals.test_settings.desiredCapabilities.version || 'headless'

    browser.page[`${componentName.toLowerCase()}Page`]()
      .visitPage(browser)
      .accessibilityScan(browser)
      .visualScan(browser, `${browserName}_${browserVersion}_${componentName}`)
  },
})

module.exports = Object.assign(
  { '@tags': ['Box', 'Button'] },
  generateTest('Box'),
  generateTest('Button')
)
