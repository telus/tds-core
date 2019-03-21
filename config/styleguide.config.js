const path = require('path')
const { fonts } = require('../packages/css-reset')

const styleguidistEnv = process.env.STYLEGUIDIST_ENV || 'dev' // dev, e2e, staging, production

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

const fontLinks = fonts
  .filter(fontUrl => path.extname(fontUrl) === '.woff2')
  .map(fontUrl => ({
    href: fontUrl,
    rel: 'preload',
    as: 'font',
    type: 'font/woff2',
    crossorigin: true,
  }))

const devTemplate = {
  lang: 'en',
  favicon: 'favicon.ico',
  head: {
    scripts: [
      {
        src: '//cdn.polyfill.io/v2/polyfill.min.js?features=Set',
      },
    ],
    links: fontLinks,
  },
}
const productionTemplate = {
  lang: 'en',
  favicon: 'favicon.ico',
  head: {
    scripts: [
      {
        src: '//cdn.polyfill.io/v2/polyfill.min.js?features=Set',
      },
      {
        src:
          'https://assets.adobedtm.com/6462022b939758565769298a6393ed7a46ee6817/satelliteLib-1a62f312773f2a4b9eaa85dbf0ec0bb49095fd2e.js',
      },
    ],
    links: fontLinks,
    raw: `
<script>
  window.dataLayer = {
    page: {
      name: 'TELUS Design System'
    }
  }
</script>`,
  },
  body: {
    raw: `<script type="text/javascript">_satellite.pageBottom();</script>`,
  },
}

module.exports = {
  title: 'TELUS Design System',

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
      Breadcrumbs: 'Breadcrumbs',
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

    if (name === 'Accordion' || name === 'ExpandCollapse') {
      kebabizeName = 'expand-collapse'
      return `import { ${name} } from '@tds/core-${kebabizeName}'`
    }

    if (name === 'SVGIcon') {
      return `import { Accessible, Speed, Success, [..IconName] } from '@tds/core-decorative-icon'`
    }

    return `import ${name} from '@tds/core-${kebabizeName}'`
  },

  usageMode: 'collapse',
  exampleMode: 'collapse',

  sections: [
    {
      name: 'TELUS Design System',
      content: path.resolve('docs/intro/welcome.md'),
    },
    {
      name: 'Components',
      sections: [
        {
          name: 'CssReset',
          content: path.resolve('packages/css-reset/CssReset.md'),
        },
        {
          name: 'Colours',
          content: path.resolve('packages/colours/Colours.md'),
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
              path.resolve('packages/Responsive/Responsive.jsx'),
              path.resolve('packages/Box/Box.jsx'),
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
              path.resolve('packages/PriceLockup/PriceLockup.jsx'),
              path.resolve('packages/Text/Text.jsx'),
              path.resolve('packages/Text/TextSup/TextSup.jsx'),
              path.resolve('packages/Strong/Strong.jsx'),
              path.resolve('packages/Small/Small.jsx'),
            ]
          },
        },
        {
          name: 'Links',
          sections: [
            {
              name: 'Breadcrumb',
              components() {
                return [
                  path.resolve('packages/Breadcrumbs/Breadcrumbs.jsx'),
                  path.resolve('packages/Breadcrumbs/Item/Item.jsx'),
                ]
              },
            },
          ],
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
              path.resolve('packages/DecorativeIcon/SVGIcon.jsx'),
              path.resolve('packages/StandaloneIcon/StandaloneIcon.jsx'),
            ]
          },
        },
        {
          name: 'Forms',
          content: path.resolve('docs/Forms.md'),
          components() {
            return [
              path.resolve('packages/Button/Button.jsx'),
              path.resolve('packages/Input/Input.jsx'),
              path.resolve('packages/Checkbox/Checkbox.jsx'),
              path.resolve('packages/Radio/Radio.jsx'),
              path.resolve('packages/ButtonGroup/ButtonGroup.jsx'),
              path.resolve('packages/ButtonGroup/ButtonGroupItem/ButtonGroupItem.jsx'),
              path.resolve('packages/Select/Select.jsx'),
              path.resolve('packages/TextArea/TextArea.jsx'),
              path.resolve('packages/InputFeedback/InputFeedback.jsx'),
              path.resolve('packages/Tooltip/Tooltip.jsx'),
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
              path.resolve('packages/YoutubeVideo/YoutubeVideo.jsx'),
              path.resolve('packages/A11yContent/A11yContent.jsx'),
            ]
          },
        },
        {
          name: 'Feedback Indicators',
          components() {
            return [
              path.resolve('packages/Notification/Notification.jsx'),
              path.resolve('packages/Spinner/Spinner.jsx'),
              path.resolve('packages/StepTracker/StepTracker.jsx'),
            ]
          },
        },
      ],
    },
    {
      name: 'Utilities',
      sections: [
        {
          name: 'PropTypes',
          content: path.resolve('packages/prop-types/PropTypes.md'),
        },
      ],
    },
  ],

  template: styleguidistEnv === 'production' ? productionTemplate : devTemplate,
  assetsDir: path.resolve('docs/assets/'),
  styleguideDir: path.resolve(`styleguide/${styleguidistEnv}`),
  require: [
    path.resolve('packages/css-reset/index.scss'),
    path.resolve('docs/scss/styleguide.scss'),
    path.resolve('config/globalComponents.js'),
  ].concat(styleguidistEnv === 'e2e' ? path.resolve('docs/scss/e2e.css') : []),
  styleguideComponents: {
    Editor: path.resolve('docs/components/overrides/Editor/Editor'),
    Logo: path.resolve('docs/components/custom/Logo/Logo'),
    'Markdown/List': path.resolve('docs/components/custom/MarkdownList/MarkdownList'),
    'Markdown/MarkdownHeading': path.resolve(
      'docs/components/custom/MarkdownHeading/MarkdownHeading'
    ),
    'Markdown/Markdown': path.resolve('docs/components/overrides/Markdown/Markdown'),
    PathlineRenderer: path.resolve('docs/components/overrides/Pathline/PathlineRenderer'),
    SectionHeadingRenderer: path.resolve(
      'docs/components/custom/SectionHeading/SectionHeadingRenderer'
    ),
    StyleGuideRenderer: path.resolve('docs/components/overrides/StyleGuide/StyleGuideRenderer'),
    TabButtonRenderer: path.resolve('docs/components/overrides/TabButton/TabButtonRenderer'),
    TableOfContentsRenderer: path.resolve(
      'docs/components/custom/TableOfContents/TableOfContentsRenderer'
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
      codeBackground: '#ffffff',
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
  updateDocs(docs, file) {
    const updatedDocs = Object.assign({}, docs)

    if (updatedDocs.doclets.version) {
      const versionFilePath = path.resolve(path.dirname(file), updatedDocs.doclets.version)
      const version = require(versionFilePath).version // eslint-disable-line import/no-dynamic-require

      updatedDocs.doclets.version = version
      updatedDocs.tags.version[0].description = version
    }

    return updatedDocs
  },
  webpackConfig: {
    devServer: {
      disableHostCheck: true,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            babelrc: false, // TODO: remove once .babelrc is removed. See jest config.
          },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            babelrc: false,
          },
        },
        {
          test: /(\.modules\.scss|flexboxgrid)/,
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
          exclude: /flexboxgrid/,
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
