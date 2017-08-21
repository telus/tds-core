import path from 'path'

import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import babel from 'rollup-plugin-babel'

import postcss from 'rollup-plugin-postcss'
import postcssModules from 'postcss-modules'
import sass from 'node-sass'
import autoprefixer from 'autoprefixer'

const cssExportMap = {}

const sassPreprocessor = (content, id) => new Promise((resolve) => {
  const result = sass.renderSync({ file: id })
  resolve({ code: result.css.toString() })
})

export default {
  entry: path.resolve('./src/index.js'),
  targets: [
    { format: 'cjs', dest: path.resolve('./dist/tds.cjs.js') },
    { format: 'es', dest: path.resolve('./dist/tds.es.js') }
  ],
  sourceMap: true,

  external: ['react', 'prop-types'],

  plugins: [
    nodeResolve({
      extensions: ['.js', '.jsx']
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    postcss({
      extract: path.resolve('./dist/tds.css'),
      sourceMap: true,
      extensions: ['.scss'],
      preprocessor: sassPreprocessor,
      plugins: [
        autoprefixer(),
        postcssModules({
          globalModulePaths: [/src\/scss/, /src\/old-components/],
          generateScopedName: 'TDS_[name]__[local]___[hash:base64:5]',
          getJSON(id, exportTokens) {
            cssExportMap[id] = exportTokens
          }
        })
      ],
      getExportNamed: false,
      getExport(id) {
        return cssExportMap[id]
      }
    }),
    babel({
      plugins: ['external-helpers'],
      exclude: 'node_modules/**'
    })
  ]
}
