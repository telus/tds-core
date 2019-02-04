// Rules Guide: http://marionebl.github.io/commitlint/#/reference-rules

// If touching a component/package, use that as the scope: feat(core-button): ... or chore(shared-animations): ...
// If not, use the most directly affected folder: test(e2e): ...
// Use "deps" when adding/removing/updating dependencies: chore(deps): ...
// Many of the files in the root are configuration files that would also use the "config" scope, such as ".babelrc" or "commitlint.config.js"
// If nothing else fits, use "other": chore(other): ...

const packages = require('@commitlint/config-lerna-scopes')

const applyCustomScope = () => {
  return Promise.resolve(
    packages.rules[`scope-enum`]().then(scopes => {
      const config = scopes
      config[2].push(
        'config',
        'deps',
        'docs',
        'e2e',
        'github',
        'guide',
        'openshift',
        'other',
        'scripts',
        'shared',
        'packages',
        'publish'
      )
      return config
    })
  )
}

module.exports = {
  extends: ['@commitlint/config-conventional'],
  utils: { applyCustomScope },
  rules: {
    'scope-enum': () => applyCustomScope(),
    'scope-empty': [2, 'never'],
  },
}
