const { rootSelector } = require('../config')

exports.command = function checkAccessibility() {
  this.initAccessibility().verify.accessibility(rootSelector, {
    verbose: false,
    rules: {
      'color-contrast': { enabled: true },
    },
  })
}
