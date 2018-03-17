import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import babel from 'rollup-plugin-babel'

import sass from 'node-sass'
import tildeImporter from 'node-sass-tilde-importer'
import postcss from 'rollup-plugin-postcss'
import postcssModules from 'postcss-modules'
import autoprefixer from 'autoprefixer'
import CssModulesSassLoader from './CssModulesSassLoader'

const cssExportMap = {}

const sassPreprocessor = (content, id) =>
  new Promise(resolve => {
    const result = sass.renderSync({ file: id, importer: tildeImporter })
    resolve({ code: result.css.toString() })
  })

export default opts => {
  const options = Object.assign(
    {
      css: true,
    },
    opts
  )

  const tdsExternals = Object.keys(options.dependencies).filter(dependency =>
    dependency.startsWith('@tds')
  )

  return {
    input: options.input,
    output: [
      { format: 'cjs', file: './dist/index.cjs.js' },
      { format: 'es', file: './dist/index.es.js' },
    ],
    sourcemap: true,

    external: ['react', 'react-dom', 'prop-types'].concat(tdsExternals),

    plugins: [
      nodeResolve({
        extensions: ['.js', '.jsx'],
      }),
      commonjs({
        include: '../../node_modules/**',
        namedExports: {
          'airbnb-prop-types': ['childrenOfType, elementType'],
        },
      }),
      options.css &&
        postcss({
          extract: './dist/index.css',
          sourceMap: true,
          extensions: ['.scss', '.css'],
          preprocessor: sassPreprocessor,
          plugins: [
            autoprefixer(),
            postcssModules({
              Loader: CssModulesSassLoader,
              globalModulePaths: [
                /packages\/SelectorCounter/,
                /packages\/Spinner/,
                /packages\/StepTracker/,
              ],
              generateScopedName: 'TDS_[name]__[local]___[hash:base64:5]',
              getJSON(id, exportTokens) {
                cssExportMap[id] = exportTokens
              },
            }),
          ],
          getExportNamed: false,
          getExport(id) {
            return cssExportMap[id]
          },
        }),
      babel({
        plugins: ['external-helpers'],
        exclude: '../../node_modules/**',
      }),
    ],
  }
}
