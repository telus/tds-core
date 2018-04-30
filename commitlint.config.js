// Rules Guide: http://marionebl.github.io/commitlint/#/reference-rules

const packages = require('@commitlint/config-lerna-scopes')

const applyCustomScope = () => {
  const customScope = packages.rules[`scope-enum`]()[2]
  customScope.push(
    'build',
    'dependencies',
    'docs',
    'e2e',
    'github',
    'guide',
    'tech-snacks',
    'lint',
    'scaffolding',
    'shared',
    'config'
  )
  return customScope
}

module.exports = {
  extends: ['@commitlint/config-conventional'],
  utils: { applyCustomScope },
  rules: {
    'scope-enum': [2, 'always', applyCustomScope()],
    'scope-empty': [2, 'never'],
  },
}
