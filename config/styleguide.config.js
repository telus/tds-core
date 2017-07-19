const path = require('path');

const version = require('../package.json').version;

module.exports = {
  title: `TDS v${version}`,

  components: '../src/components/**/*.jsx',
  skipComponentsWithoutExample: true,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.jsx');

    return `import { ${name} } from '@telusdigital/tds';`;
  },

  showUsage: true,
  showCode: true,

  require: [
    path.resolve("src/scss/global.scss")
  ],
  webpackConfig: {
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.png$/,
          use: 'url-loader?mimetype=image/png'
        }
      ]
    }
  }
}
