// module.exports = {
//   '@tags': ['colours'],
//
//   'colours Page': browser => {
//     const browserName = browser.globals.test_settings.desiredCapabilities.browserName || ''
//     const browserVersion = browser.globals.test_settings.desiredCapabilities.version || 'headless'
//
//     browser.page
//       .coloursPage()
//       .visitPage(browser)
//       .accessibilityScan(browser)
//       .visualScan(browser, `${browserName}_${browserVersion}_colours`)
//   },
// }
