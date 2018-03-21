/* eslint-disable */

// Rules Guide: http://marionebl.github.io/commitlint/#/reference-rules

const packages = require('@commitlint/config-lerna-scopes')

function applyCustomScope() {
  let customScope = packages.rules[`scope-enum`]()[2]
  customScope.push('docs', 'build', 'tech-snacks', 'lint', 'github', 'e2e', 'dependencies')
  return customScope
}

module.exports = {
  utils: { applyCustomScope },
  rules: {
    'scope-enum': [2, 'always', applyCustomScope()],
    'scope-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],
    'subject-empty': [2, 'never'],
  },
}
