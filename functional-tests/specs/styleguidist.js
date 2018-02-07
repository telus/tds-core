const timeout = 30000
const styleguidistTests = {
  beforeEach: browser => {
    browser.page
      .styleguidist()
      .navigate()
      .waitForElementVisible('@root', timeout)
  },
  after: browser => {
    browser.end()
  },
}

styleguidistTests['Goto Styleguidist SPA'] = function goToStyleguidist(browser) {
  const styleguidistPage = browser.page.styleguidist()
  const root = '@root'

  styleguidistPage
    // Accessibility check
    .initAccessibility()
    .assert.accessibility(root, { verbose: true })
}

module.exports = styleguidistTests
