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
      name: 'TELUS Design System',
      content: '../docs-new/intro/overview.md',
      sections: [
        {
          name: 'Releases',
          content: '../docs-new/intro/releases.md'
        }
      ]
    },
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
          name: 'Grid',
          content: '../docs-new/elements/grid.md'
        },
        {
          name: 'Lists',
          content: '../docs-new/elements/lists.md'
        },
        {
          name: 'Typography',
          content: '../docs-new/elements/typography.md'
        },
        {
          name: 'Utility Icons',
          content: '../docs-new/elements/utility-icons.md'
        },
        {
          name: 'Utility Mixins',
          content: '../docs-new/elements/utility-mixins.md'
        },
        {
          name: 'Design Tokens',
          content: '../docs-new/elements/design-tokens.md'
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
