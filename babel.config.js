/* eslint-disable func-names */
module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
      '@babel/plugin-transform-runtime',
      '@babel/plugin-proposal-class-properties',
      'babel-plugin-styled-components',
    ],
  }
}
