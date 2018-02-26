module.exports = {
  extends: ['@telusdigital/eslint-config', 'plugin:prettier/recommended'], // Recommended eslint + prettier config: https://prettier.io/docs/en/eslint.html#why-not-both
  parser: 'babel-eslint',
  rules: {
    'react/require-default-props': 'warn',
    'import/no-extraneous-dependencies': false, // disabling it because all dev dependencies are pulled into the root
    'prefer-destructuring': 0,
  },
}
