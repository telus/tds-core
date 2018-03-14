const { rootSelector } = require('../config')

exports.command = function checkAccessibility() {
  this.initAccessibility().assert.accessibility(rootSelector, {
    verbose: false,
    rules: {
      'color-contrast': { enabled: true },
    },
  })
}
