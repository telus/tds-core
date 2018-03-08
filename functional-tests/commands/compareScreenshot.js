const path = require('path')

exports.command = function compare(name, tolerance, callback) {
  const screenshotPath = path.join(__dirname, '..', 'screenshots')
  const filename = `${name}.png`
  const resultPath = path.join(screenshotPath, 'results', filename)

  // add a pause to ensure any process / event is finished processing
  this.pause(1000)

  this.saveScreenshot(resultPath, () => {
    this.assert.compareScreenshot(name, tolerance, result => {
      if (typeof callback === 'function') {
        callback.call(this, result)
      }
    })
  })
  return this
}
