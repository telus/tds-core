exports.command = function compare(name, tolerance, callback) {
  // add a pause to ensure any process / event is finished processing
  this.pause(1000)

  this.assert.compareScreenshot(name, tolerance, result => {
    if (typeof callback === 'function') {
      callback.call(this, result)
    }
  })

  return this
}
