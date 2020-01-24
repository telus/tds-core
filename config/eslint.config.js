module.exports = {
  extends: ['@telus/eslint-config', 'plugin:prettier/recommended'], // Recommended eslint + prettier config: https://prettier.io/docs/en/eslint.html#why-not-both
  parser: 'babel-eslint',
  plugins: ['react-hooks'],
  rules: {
    'react/require-default-props': 'warn',
    'import/no-extraneous-dependencies': 0, // disabling it because all dev dependencies are pulled into the root
    'prefer-destructuring': 0,
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'react/jsx-one-expression-per-line': 0,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 0, // We need prop spreading
    'react/destructuring-assignment': 0,
    'react/no-multi-comp': 0,
    'react/state-in-constructor': 0, // Would result in unecessary constructors
  },
}
