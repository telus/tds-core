// Lists of TDS components to ignore during builds, tests, and publishes

exports.ignoredPackages = ['@tds/core-selector-counter', '@tds/core-standalone-icon']

exports.ignoredPackagesE2E = [
  '@tds/shared-animation',
  '@tds/core-box',
  '@tds/core-flex-grid',
  '@tds/core-responsive',
  '@tds/core-colours',
  '@tds/core-css-reset',
  '@tds/shared-hocs',
  '@tds/shared-styles',
  '@tds/shared-typography',
  '@tds/util-helpers',
  '@tds/util-prop-types',

  // TODO: fix a11y issues with these components
  '@tds/core-spinner',
  '@tds/core-video',
  '@tds/core-web-video',
]
