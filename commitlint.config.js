/* eslint-disable */

const packages = require('@commitlint/config-lerna-scopes')

function applyCustomScope() {
  customScope = packages.rules[`scope-enum`]()[2]
  customScope.push('docs', 'build', 'tech-snacks', 'lint', 'github', 'packages', 'misc')
  return customScope
}

module.exports = {
  utils: { applyCustomScope },
  rules: {
    'scope-enum': [2, 'always', applyCustomScope()],
    'scope-empty': [2, 'never'],
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']],
  },
}
