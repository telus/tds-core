/* eslint-disable no-console */
const root = '#app'

const accessibilityScan = (browser, page) => {
  if (browser.globals.accessibilityTesting) {
    console.log('Accessibility Scanning on the page: ', page.name)
    page.initAccessibility().assert.accessibility(root, {
      verbose: false,
      rules: {
        'color-contrast': { enabled: true },
      },
    })
  }
}

const visualScan = (browser, page, fileName, selector, tolerance) => {
  const testName = browser.currentTest.module
  if (browser.globals.visualTesting) {
    console.log('Visual Scanning on the page/file name: ', `${testName}/${fileName}`)
    page.moveToElement(root, 0, 0).compareScreenshot(testName, fileName, selector, tolerance)
  }
}

module.exports = {
  accessibilityScan,
  visualScan,
}
