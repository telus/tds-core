const path = require('path')

const styleguidistEnv = process.env.STYLEGUIDIST_ENV || 'dev' // dev, staging, production

// Append strings to this array to enable components in staging, e.g. `['Box', 'ExpandCollapse']`
const enabledInStaging = []

/* eslint-disable no-unused-vars */
const toggleByEnv = (component, toggledOffValue, toggledOnValue) => {
  switch (styleguidistEnv) {
    case 'dev':
      return toggledOffValue
    case 'staging':
      return enabledInStaging.includes(component) ? toggledOffValue : toggledOnValue
    case 'production':
      return toggledOnValue
    default:
      return toggledOnValue
  }
}

const compact = array => array.filter(element => element !== undefined)
/* eslint-enable no-unused-vars */

module.exports = {
  title: `TDS`,

  skipComponentsWithoutExample: true,
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.jsx?$/, '.md')
  },
  getComponentPathLine(componentPath) {
    let name = path.basename(componentPath, '.jsx')

    // Add other namespaced components here.
    // key is a path to match, value is the name to show in the styleguide for the import statement
    const namespacedComponents = {
      FlexGrid: 'FlexGrid',
      'ExpandCollapse/Panel': 'ExpandCollapse',
      DisplayHeading: 'DisplayHeading',
      Heading: 'Heading',
      'Text/TextSup': 'Text',
      'TextArea/TextArea': 'TextArea',
      'StepTracker/Steps': 'StepTracker',
    }

    const componentDirectory = path.dirname(componentPath)

    const componentPathTest = Object.keys(namespacedComponents).find(pathTest =>
      componentDirectory.includes(pathTest)
    )

    if (componentPathTest) {
      name = namespacedComponents[componentPathTest]
    }

    let kebabizeName = name
      .split(/(?=[A-Z])/)
      .join('-')
      .toLowerCase()

    if (name === 'Accordion') {
      kebabizeName = 'expand-collapse'
    }

    return `import { ${name} } from '@tds/core-${kebabizeName}'`
  },

  showUsage: false,
  showCode: false,

  sections: [
    {
      name: 'TELUS Design System',
      content: path.resolve('docs/intro/welcome.md'),
    },
    {
      name: 'Component Catalogue',
      sections: [
        {
          name: 'CSS reset',
          content: path.resolve('docs/elements/css-reset.md'),
        },
        {
          name: 'Colours',
          content: path.resolve('docs/elements/colours.md'),
        },
        {
          name: 'Layout',
          sections: [
            {
              name: 'Grid',
              components() {
                return [
                  path.resolve('packages/FlexGrid/FlexGrid.jsx'),
                  path.resolve('packages/FlexGrid/Row/Row.jsx'),
                  path.resolve('packages/FlexGrid/Col/Col.jsx'),
                ]
              },
            },
            {
              name: 'Dividers',
              components() {
                return [
                  path.resolve('packages/WaveDivider/WaveDivider.jsx'),
                  path.resolve('packages/DimpleDivider/DimpleDivider.jsx'),
                  path.resolve('packages/HairlineDivider/HairlineDivider.jsx'),
                ]
              },
            },
          ],
          components() {
            return [
              path.resolve('packages/Box/Box.jsx'),
              path.resolve('packages/Responsive/Responsive.jsx'),
            ]
          },
        },
        {
          name: 'Typography',
          content: path.resolve('docs/Typography.md'),
          components() {
            return [
              path.resolve('packages/DisplayHeading/DisplayHeading.jsx'),
              path.resolve('packages/DisplayHeading/DisplayHeadingSup/DisplayHeadingSup.jsx'),
              path.resolve('packages/Heading/Heading.jsx'),
              path.resolve('packages/Heading/HeadingSup/HeadingSup.jsx'),
              path.resolve('packages/Paragraph/Paragraph.jsx'),
              path.resolve('packages/Text/Text.jsx'),
              path.resolve('packages/Text/TextSup/TextSup.jsx'),
              path.resolve('packages/Strong/Strong.jsx'),
              path.resolve('packages/Small/Small.jsx'),
            ]
          },
        },
        {
          name: 'Links',
          components() {
            return [
              path.resolve('packages/Link/Link.jsx'),
              path.resolve('packages/ChevronLink/ChevronLink.jsx'),
              path.resolve('packages/ButtonLink/ButtonLink.jsx'),
            ]
          },
        },
        {
          name: 'Icons',
          content: path.resolve('docs/icons.md'),
          components() {
            return [
              path.resolve('packages/DecorativeIcon/DecorativeIcon.jsx'),
              path.resolve('packages/StandaloneIcon/StandaloneIcon.jsx'),
            ]
          },
        },
        {
          name: 'Forms',
          components() {
            return [
              path.resolve('packages/Button/Button.jsx'),
              path.resolve('packages/Input/Input.jsx'),
              path.resolve('packages/Checkbox/Checkbox.jsx'),
              path.resolve('packages/Radio/Radio.jsx'),
              path.resolve('packages/Select/Select.jsx'),
              path.resolve('packages/TextArea/TextArea.jsx'),
              path.resolve('packages/InputFeedback/InputFeedback.jsx'),
              path.resolve('packages/Tooltip/Tooltip.jsx'),
              path.resolve('packages/SelectorCounter/SelectorCounter.jsx'),
            ]
          },
        },
        {
          name: 'Lists',
          content: path.resolve('docs/Lists.md'),
          components() {
            return [
              path.resolve('packages/UnorderedList/UnorderedList.jsx'),
              path.resolve('packages/OrderedList/OrderedList.jsx'),
            ]
          },
        },
        {
          name: 'Expand collapse',
          components() {
            return [
              path.resolve('packages/ExpandCollapse/ExpandCollapse.jsx'),
              path.resolve('packages/ExpandCollapse/Accordion/Accordion.jsx'),
              path.resolve('packages/ExpandCollapse/Panel/Panel.jsx'),
            ]
          },
        },
        {
          name: 'Content',
          components() {
            return [
              path.resolve('packages/Card/Card.jsx'),
              path.resolve('packages/Image/Image.jsx'),
            ]
          },
        },
        {
          name: 'Feedback Indicators',
          components() {
            return [
              path.resolve('packages/Notification/Notification.jsx'),
              path.resolve('packages/Spinner/Spinner.jsx'),
              path.resolve('packages/StepTracker/Steps/Steps.jsx'),
            ]
          },
        },
      ],
    },
  ],

  template:
    styleguidistEnv === 'production'
      ? path.resolve('docs/index.html')
      : path.resolve('docs/dev-index.html'),
  assetsDir: path.resolve('docs/assets/'),
  styleguideDir: path.resolve('guide/components'),
  require: [
    path.resolve('packages/css-reset/index.scss'),
    path.resolve('docs/scss/styleguide.scss'),
  ],
  styleguideComponents: {
    StyleGuideRenderer: path.resolve('docs/components/StyleGuide/StyleGuideRenderer'),
    Logo: path.resolve('docs/components/Logo/Logo'),
    Markdown: path.resolve('docs/components/Markdown/Markdown'),
    SectionHeadingRenderer: path.resolve('docs/components/SectionHeading/SectionHeadingRenderer'),
    TableOfContentsRenderer: path.resolve(
      'docs/components/TableOfContents/TableOfContentsRenderer'
    ),
  },
  theme: {
    fontFamily: {
      base: ['TELUS-Web', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    },
    color: {
      link: '#4B286D',
      linkHover: '#54595F',
      sidebarBackground: '#FFFFFF',
    },
    sidebarWidth: 240,
  },
  styles: {
    // Fixing mobile overflow of code examples
    Markdown: {
      pre: {
        'overflow-x': 'auto',
      },
    },
    ReactComponent: {
      tabs: {
        'overflow-x': 'auto',
      },
    },
    // [TDS-381] Increase font size in props tables to match default Paragraph size.
    Table: {
      cell: {
        fontSize: '1rem',
      },
      cellHeading: {
        fontSize: '1rem',
      },
    },
    Name: {
      name: {
        fontSize: 'inherit',
      },
    },
    Type: {
      type: {
        fontSize: 'inherit',
      },
    },
    Text: {
      text: {
        fontSize: 'inherit',
      },
    },
  },
  webpackConfig: {
    devServer: {
      disableHostCheck: true,
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /(\.modules\.scss)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: 'TDS_[name]__[local]___[hash:base64:5]',
                importLoaders: 2, // Number of loaders applied before CSS loader
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [require('autoprefixer')()],
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.scss$/,
          exclude: /\.modules.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpg|svg)$/,
          use: 'url-loader',
        },
      ],
    },
  },
}
