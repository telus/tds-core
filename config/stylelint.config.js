module.exports = {
  // Don't use stylelint-config-css-modules as it overrides needed settings from recommended-scss
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-prettier'],
  rules: {
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'], // CSS modules
      },
    ],
  },
}
