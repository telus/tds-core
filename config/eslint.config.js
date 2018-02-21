module.exports = {
  extends: ['../node_modules/@telusdigital/eslint-config/index.js', 'prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  rules: {
    'react/require-default-props': 'warn',
    'import/no-extraneous-dependencies': false, // disabling it because all dev dependencies are pulled into the root
    'prefer-destructuring': 0,
  },
}
