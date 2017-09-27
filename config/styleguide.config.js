const path = require('path')
const { version } = require('../package.json')

const styleguidistEnv = process.env.STYLEGUIDIST_ENV || 'dev' // dev, staging, production

const enabledInStaging = ['Input', 'Lists', 'Icon']

/* eslint-disable no-unused-vars */
const toggleByEnv = (component, toggledOffValue, toggledOnValue) => {
  switch (styleguidistEnv) {
    case 'dev': return toggledOffValue
    case 'staging': return enabledInStaging.includes(component) ? toggledOffValue : toggledOnValue
    case 'production': return toggledOnValue
    default: return toggledOnValue
  }
}

const compact = array => (
  array.filter(element => element !== undefined)
)
/* eslint-enable no-unused-vars */


module.exports = {
  title: `TDS v${version}`,

  skipComponentsWithoutExample: true,
  getComponentPathLine(componentPath) {
    let name = path.basename(componentPath, '.jsx')

    // Grid has name-spaced sub-components
    if (path.dirname(componentPath).includes('Grid')) {
      name = 'Grid'
    }

    // Steps has name-spaced sub-components
    if (path.dirname(componentPath).includes('StepTracker')) {
      name = 'Steps'
    }

    // ExpandCollapse has name-spaced sub-components
    if (path.dirname(componentPath).includes('ExpandCollapse')) {
      name = 'ExpandCollapse'
    }

    // Text has name-spaced sub-components
    if (path.dirname(componentPath).includes('Text')) {
      name = 'Text'
    }

    // DisplayHeading has name-spaced sub-components
    if (path.dirname(componentPath).includes('Typography/DisplayHeading')) {
      name = 'DisplayHeading'
    }

    // Heading has name-spaced sub-components
    if (path.dirname(componentPath).includes('Typography/Heading')) {
      name = 'Heading'
    }

    return `import { ${name} } from '@telusdigital/tds'`
  },

  showUsage: true,
  showCode: true,

  sections: [
    {
      name: 'TELUS Design System',
      content: path.resolve('docs/intro/welcome.md'),
      sections: [
        {
          name: 'Getting started',
          content: path.resolve('docs/intro/getting-started.md')
        },
        {
          name: 'Design vision',
          content: path.resolve('docs/intro/design-vision.md')
        },
        {
          name: 'Releases',
          content: path.resolve('docs/intro/releases.md')
        },
        {
          name: 'Contributing',
          content: path.resolve('docs/intro/contributions.md')
        }
      ]
    },
    {
      name: 'Foundational elements',
      content: path.resolve('docs/elements/intro.md'),
      sections: [
        {
          name: 'Buttons',
          content: path.resolve('docs/elements/buttons.md')
        },
        {
          name: 'Links',
          content: path.resolve('docs/elements/links.md')
        },
        {
          name: 'Colours',
          content: path.resolve('docs/elements/colours.md')
        },
        {
          name: 'Forms',
          content: toggleByEnv('Input', path.resolve('docs/elements/forms-with-deprecated-input.md'), path.resolve('docs/elements/forms.md'))
        },
        {
          name: 'Grid',
          content: path.resolve('docs/elements/grid.md')
        },
        {
          name: 'Lists',
          content: toggleByEnv('Lists', path.resolve('docs/elements/lists-deprecated.md'), path.resolve('docs/elements/lists.md'))
        },
        {
          name: 'Typography',
          content: path.resolve('docs/elements/typography.md')
        },
        {
          name: 'Utility icons',
          content: toggleByEnv('Icon', path.resolve('docs/elements/utility-icons-deprecated.md'), path.resolve('docs/elements/utility-icons.md'))
        },
        {
          name: 'Utility mixins',
          content: path.resolve('docs/elements/utility-mixins.md')
        },
        {
          name: 'Design tokens',
          content: path.resolve('docs/elements/design-tokens.md')
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
              path.resolve('src/old-components/Grid/Container/Container.jsx'),
              path.resolve('src/old-components/Grid/Row/Row.jsx'),
              path.resolve('src/old-components/Grid/Column/Column.jsx')
            ]
          }
        },
        {
          name: 'Content',
          components() {
            return [
              path.resolve('src/old-components/Card/Card.jsx')
            ]
          },
          sections: compact([
            {
              name: 'Links',
              components() {
                return [
                  path.resolve('src/components/Link/Link.jsx'),
                  path.resolve('src/components/Link/ChevronLink/ChevronLink.jsx'),
                  path.resolve('src/components/Link/ButtonLink/ButtonLink.jsx')
                ]
              }
            },
            toggleByEnv('Lists', {
              name: 'Lists',
              content: path.resolve('src/components/Lists/Lists.md'),
              components() {
                return [
                  path.resolve('src/components/Lists/UnorderedList/UnorderedList.jsx'),
                  path.resolve('src/components/Lists/OrderedList/OrderedList.jsx')
                ]
              }
            }),
            {
              name: 'Expand collapse',
              components() {
                return [
                  path.resolve('src/old-components/ExpandCollapse/Group.jsx'),
                  path.resolve('src/old-components/ExpandCollapse/Panel.jsx')
                ]
              }
            },
            toggleByEnv('Dividers', {
              name: 'Dividers',
              components() {
                return [
                  path.resolve('src/components/Dividers/WaveDivider/WaveDivider.jsx'),
                  path.resolve('src/components/Dividers/DimpleDivider/DimpleDivider.jsx'),
                  path.resolve('src/components/Dividers/HairlineDivider/HairlineDivider.jsx')
                ]
              }
            })
          ])
        },
        {
          name: 'Typography',
          content: path.resolve('src/components/Typography/Typography.md'),
          sections: [
            {
              name: 'Text',
              components() {
                return [
                  path.resolve('src/components/Typography/Paragraph/Paragraph.jsx'),
                  path.resolve('src/components/Typography/Text/Text.jsx'),
                  path.resolve('src/components/Typography/Text/TextSup/TextSup.jsx'),
// Hiding Text subscripts until we identify a concrete use for them
// path.resolve('src/components/Typography/Text/TextSub/TextSub.jsx'),
                  path.resolve('src/components/Typography/Strong/Strong.jsx'),
                  path.resolve('src/components/Typography/Small/Small.jsx')
                ]
              }
            },
            {
              name: 'Headings',
              components() {
                return [
                  path.resolve('src/components/Typography/DisplayHeading/DisplayHeading.jsx'),
                  path.resolve('src/components/Typography/DisplayHeading/DisplayHeadingSup/DisplayHeadingSup.jsx'),
// Hiding DisplayHeading subscripts until we identify a concrete use for them
// path.resolve('src/components/Typography/DisplayHeading/DisplayHeadingSub/DisplayHeadingSub.jsx')
                  path.resolve('src/components/Typography/Heading/Heading.jsx'),
                  path.resolve('src/components/Typography/Heading/HeadingSup/HeadingSup.jsx')
// Hiding Heading subscripts until we identify a concrete use for them
// path.resolve('src/components/Typography/Heading/HeadingSub/HeadingSub.jsx')
                ]
              }
            }
          ]
        },
        {
          name: 'Icons',
          content: toggleByEnv('Icon', path.resolve('src/components/Icons/icons.md')),
          components() {
            return compact([
              toggleByEnv('Icon', path.resolve('src/components/Icons/DecorativeIcon/DecorativeIcon.jsx')),
              toggleByEnv('Icon', path.resolve('src/components/Icons/StandaloneIcon/StandaloneIcon.jsx')),
              path.resolve('src/old-components/Icon/Icon.jsx')
            ])
          }
        },
        {
          name: 'Feedback indicators',
          components() {
            return [
              path.resolve('src/components/Notification/Notification.jsx'),
              path.resolve('src/old-components/Spinner/Spinner.jsx'),
              path.resolve('src/old-components/StepTracker/Steps/Steps.jsx')
            ]
          }
        },
        {
          name: 'Forms',
          components() {
            return compact([
              path.resolve('src/components/Button/Button.jsx'),
              toggleByEnv('Input', path.resolve('src/components/Input/Input.jsx')),
              path.resolve('src/old-components/SelectorCounter/SelectorCounter.jsx')
            ])
          }
        }
      ]
    }
  ],


  template: path.resolve('docs/index.html'),
  assetsDir: path.resolve('docs/assets/'),
  styleguideDir: path.resolve('styleguide', styleguidistEnv),
  require: [
    path.resolve('src/scss/global.scss'),
    path.resolve('docs/scss/styleguide.scss')
  ],
  styleguideComponents: {
    Logo: path.resolve('docs/components/Logo')
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
                localIdentName: 'TDS_[name]__[local]___[hash:base64:5]',
                importLoaders: 1 // Number of loaders applied before CSS loader
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
          test: /\.(png|jpg|svg)$/,
          use: 'url-loader'
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
      linkHover: '#54595F',
      sidebarBackground: '#FFFFFF'
    },
    sidebarWidth: 240
  }
}
