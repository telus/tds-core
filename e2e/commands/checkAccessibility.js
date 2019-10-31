const { rootSelector } = require('../config')

exports.command = function checkAccessibility() {
  this.initAccessibility().verify.accessibility(rootSelector, {
    verbose: false,
    timeout: 10000,
    rules: {
      'color-contrast': { enabled: true },
      'skip-link': { enabled: false },
      'heading-order': { enabled: false },
      'duplicate-id': { enabled: false },
      'duplicate-id-aria': { enabled: false }, // @tds/core-checkbox
      'form-field-multiple-labels': { enabled: false }, // @tds/core-checkbox
      'duplicate-id-active': { enabled: false }, // tooltip
    },
  })
}
