const path = require('path');

const version = require('../package.json').version;

module.exports = {
  title: `TDS v${version}`,

  skipComponentsWithoutExample: true,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.jsx');

    return `import { ${name} } from '@telusdigital/tds';`;
  },

  showUsage: true,
  showCode: true,

  sections: [
    {
      name: 'Foundational Elements',
      sections: [
        {
          name: 'Buttons',
          content: '../docs-new/elements/buttons.md'
        }
      ]
    },
    {
      name: 'Components',
      components: '../src/components/**/*.jsx',
    }
  ],

  styleguideDir: path.resolve('styleguide'),
  require: [
    path.resolve('src/scss/global.scss'),
    path.resolve('docs-new/scss/styleguide.scss')
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
};
