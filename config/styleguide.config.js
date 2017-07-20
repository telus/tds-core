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
        },
        {
          name: 'Links',
          content: '../docs-new/elements/links.md'
        },
        {
          name: 'Colours',
          content: '../docs-new/elements/colours.md'
        },
        {
          name: 'Forms',
          content: '../docs-new/elements/forms.md'
        },
        {
          name: 'Typography',
          content: '../docs-new/elements/typography.md'
        }
      ]
    },
    {
      name: 'Components',
      components: '../src/components/**/*.jsx'
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
  },
  theme: {
    fontFamily: {
      base: ['TELUS-Web', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
    },
    color: {
      link: '#4B286D',
      linkHover: '#54595F'
    }
  }
};
