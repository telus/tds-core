// Lists of TDS components to ignore during builds, tests, and publishes

exports.ignoredPackages = ['@tds/core-selector-counter']
exports.ignoredPackagesE2E = [
  '@tds/core-selector-counter',
  '@tds/core-benefit',
  '@tds/core-video',
  '@tds/core-web-video',
]
exports.componentsWithExportsE2E = {
  Benefit: ['BenefitWithHeading', 'BenefitNoHeading'],
}
