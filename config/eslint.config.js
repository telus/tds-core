module.exports = {
  extends: ['@telus/eslint-config', 'plugin:prettier/recommended'], // Recommended eslint + prettier config: https://prettier.io/docs/en/eslint.html#why-not-both
  parser: 'babel-eslint',
  rules: {
    'react/require-default-props': 'warn',
    'import/no-extraneous-dependencies': false, // disabling it because all dev dependencies are pulled into the root
    'prefer-destructuring': 0,
    'react/destructuring-assignment': [true, 'always', { ignoreClassFields: false }],
    'jsx-a11y/label-has-for': 0,
    'react/jsx-one-expression-per-line': 0,
  },
}
