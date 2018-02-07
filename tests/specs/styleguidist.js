/* eslint-disable */
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

styleguidistTests['Goto Styleguidist SPA'] = function(browser) {
  const styleguidistPage = browser.page.styleguidist()
  const root = '@root'
  const title = '@title'

  styleguidistPage
    // Accessibility check
    .initAccessibility()
    .assert.accessibility(root, { verbose: true })

    // Custom checks
    .assert.containsText(title, 'TELUS Design System')
}

module.exports = styleguidistTests
