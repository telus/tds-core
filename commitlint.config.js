// Rules Guide: http://marionebl.github.io/commitlint/#/reference-rules

// If touching a component/package, use that as the scope: feat(core-button): ... or chore(shared-animations): ...
// If not, use the most directly affected folder: test(e2e): ...
// Use "dependencies" when adding/removing/updating dependencies: chore(dependencies): ...
// Many of the files in the root are configuration files that would also use the "config" scope, such as ".babelrc" or "commitlint.config.js"
// If nothing else fits, use "other": chore(other): ...

const packages = require('@commitlint/config-lerna-scopes')

const applyCustomScope = () => {
  const customScope = packages.rules[`scope-enum`]()[2]
  customScope.push(
    'config',
    'dependencies',
    'docs',
    'e2e',
    'github',
    'guide',
    'other',
    'scripts',
    'shared'
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
