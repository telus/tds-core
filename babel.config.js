/* eslint-disable func-names */
module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/plugin-proposal-class-properties', 'emotion'],
    env: {
      test: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties', ['emotion', { "sourceMap": true }]],
      },
    },
  }
}
