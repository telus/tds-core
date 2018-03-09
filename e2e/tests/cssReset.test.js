module.exports = {
  '@tags': ['cssReset'],

  'CSS reset Page': browser => {
    const browserName = browser.globals.test_settings.desiredCapabilities.browserName || ''
    const browserVersion = browser.globals.test_settings.desiredCapabilities.version || 'headless'

    browser.page
      .cssResetPage()
      .visitPage(browser)
      .accessibilityScan(browser)
      .visualScan(browser, `${browserName}_${browserVersion}_cssReset`)
  },
}
