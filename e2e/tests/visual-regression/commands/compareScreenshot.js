/* eslint-disable func-names */
const root = '#app'
const path = require('path')

const resizeWindow = function(browser) {
  return browser.element('css selector', 'html', element => {
    browser.elementIdSize(element.value.ELEMENT, pageSize => {
      const width = pageSize.value.width
      const height = pageSize.value.height

      // add a pause to ensure any process / event is finished processing
      browser.resizeWindow(width, height)
      browser.pause(500)
    })
  })
}

const takeScreenshot = (resultPath, browser, selector = root, callback) => {
  return browser.element('css selector', selector, element => {
    browser.saveScreenshot(resultPath, () => {
      if (typeof callback === 'function') {
        callback.call(browser, element)
      }
    })
  })
}

exports.command = function(testName, fileName, selector, tolerance, callback) {
  if (testName && fileName) {
    const file = `${fileName}.png`
    const resultPath = path.join(__dirname, '..', testName, 'results', file)

    resizeWindow(this)

    takeScreenshot(resultPath, this, selector, () => {
      this.assert.compareScreenshot(testName, file, tolerance, result => {
        if (typeof callback === 'function') {
          callback.call(this, result)
        }
      })
    })
  }
  return this
}
