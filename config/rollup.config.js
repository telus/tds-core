import path from 'path'

import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import babel from 'rollup-plugin-babel'

import sass from 'node-sass'
import postcss from 'rollup-plugin-postcss'
import postcssModules from 'postcss-modules'
import autoprefixer from 'autoprefixer'
import CssModulesSassLoader from './CssModulesSassLoader'

const cssExportMap = {}

const sassPreprocessor = (content, id) =>
  new Promise(resolve => {
    const result = sass.renderSync({ file: id })
    resolve({ code: result.css.toString() })
  })

export default {
  input: path.resolve('./src/index.js'),
  output: [
    { format: 'cjs', file: path.resolve('./dist/tds.cjs.js') },
    { format: 'es', file: path.resolve('./dist/tds.es.js') },
  ],
  sourcemap: true,

  external: ['react', 'react-dom', 'prop-types'],

  plugins: [
    nodeResolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'airbnb-prop-types': ['childrenOfType'],
      },
    }),
    postcss({
      extract: path.resolve('./dist/tds.css'),
      sourceMap: true,
      extensions: ['.scss', '.css'],
      preprocessor: sassPreprocessor,
      plugins: [
        autoprefixer(),
        postcssModules({
          Loader: CssModulesSassLoader,
          globalModulePaths: [
            /src\/scss/,
            /src\/old-components/,
            /packages\/SelectorCounter/,
            /packages\/Spinner/,
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
      exclude: 'node_modules/**',
    }),
  ],
}
