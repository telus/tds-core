const path = require('path');

const version = require('../package.json').version;

module.exports = {
  title: `TDS v${version}`,

  skipComponentsWithoutExample: true,
  getComponentPathLine(componentPath) {
    let name = path.basename(componentPath, '.jsx');

    // Grid has name-spaced sub-components
    if (path.dirname(componentPath).includes('Grid')) {
      name = 'Grid';
    }

    // Steps has name-spaced sub-components
    if (path.dirname(componentPath).includes('StepTracker')) {
      name = 'Steps';
    }

    // ExpandCollapse has name-spaced sub-components
    if (path.dirname(componentPath).includes('ExpandCollapse')) {
      name = 'ExpandCollapse';
    }

    return `import { ${name} } from '@telusdigital/tds';`;
  },

  showUsage: true,
  showCode: true,

  sections: [
    {
      name: 'TELUS Design System',
      content: path.resolve('docs-new/intro/welcome.md'),
      sections: [
        {
          name: 'Getting Started',
          content: path.resolve('docs-new/intro/getting-started.md')
        },
        {
          name: 'Design Vision',
          content: path.resolve('docs-new/intro/design-vision.md')
        },
        {
          name: 'Releases',
          content: path.resolve('docs-new/intro/releases.md')
        },
        {
          name: 'Contributing',
          content: path.resolve('docs-new/intro/contributions.md')
        }
      ]
    },
    {
      name: 'Foundational Elements',
      content: path.resolve('docs-new/elements/intro.md'),
      sections: [
        {
          name: 'Buttons',
          content: path.resolve('docs-new/elements/buttons.md')
        },
        {
          name: 'Links',
          content: path.resolve('docs-new/elements/links.md')
        },
        {
          name: 'Colours',
          content: path.resolve('docs-new/elements/colours.md')
        },
        {
          name: 'Forms',
          content: path.resolve('docs-new/elements/forms.md')
        },
        {
          name: 'Grid',
          content: path.resolve('docs-new/elements/grid.md')
        },
        {
          name: 'Lists',
          content: path.resolve('docs-new/elements/lists.md')
        },
        {
          name: 'Typography',
          content: path.resolve('docs-new/elements/typography.md')
        },
        {
          name: 'Utility Icons',
          content: path.resolve('docs-new/elements/utility-icons.md')
        },
        {
          name: 'Utility Mixins',
          content: path.resolve('docs-new/elements/utility-mixins.md')
        },
        {
          name: 'Design Tokens',
          content: path.resolve('docs-new/elements/design-tokens.md')
        }
      ]
    },
    {
      name: 'Components',
      sections: [
        {
          name: 'Grid',
          components() {
            return [
              path.resolve('src/components/Grid/Container/Container.jsx'),
              path.resolve('src/components/Grid/Row/Row.jsx'),
              path.resolve('src/components/Grid/Column/Column.jsx')
            ]
          }
        },
        {
          name: 'Content',
          components() {
            return [
              path.resolve('src/components/Card/Card.jsx')
            ]
          },
          sections: [
            {
              name: 'Expand Collapse',
              components() {
                return [
                  path.resolve('src/components/ExpandCollapse/Group.jsx'),
                  path.resolve('src/components/ExpandCollapse/Panel.jsx')
                ]
              }
            }
          ]
        },
        {
          name: "Icons",
          components: path.resolve('src/components/Icon/Icon.jsx')
        },
        {
          name: 'Feedback Indicators',
          components() {
            return [
              path.resolve('src/components/Notification/Notification.jsx'),
              path.resolve('src/components/Spinner/Spinner.jsx'),
              path.resolve('src/components/StepTracker/Steps/Steps.jsx')
            ]
          }
        },
        {
          name: 'Forms',
          components() {
            return [
              path.resolve('src/components/SelectorCounter/SelectorCounter.jsx'),
            ]
          }
        },
      ]
    }
  ],


  template: path.resolve('docs-new/index.html'),
  assetsDir: path.resolve('docs-new/assets/'),
  styleguideDir: path.resolve('styleguide'),
  require: [
    path.resolve('src/scss/global.scss'),
    path.resolve('docs-new/scss/styleguide.scss')
  ],
  styleguideComponents: {
    Logo: path.resolve('docs-new/components/Logo')
  },
  webpackConfig: {
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.modules.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1, // Number of loaders applied before CSS loader
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.scss$/,
          exclude: /\.modules.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.png$/,
          use: 'url-loader?mimetype=image/png'
        },
        {
					test: /\.svg$/,
					loader: 'url-loader',
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
