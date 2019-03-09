import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import babel from 'rollup-plugin-babel'

import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

import CssModulesSassLoader from './CssModulesSassLoader'

export default opts => {
  const options = Object.assign(
    {
      css: true,
    },
    opts
  )

  const tdsExternals = options.dependencies
    ? Object.keys(options.dependencies).filter(dependency => dependency.startsWith('@tds'))
    : []

  return {
    input: options.input,
    output: [
      { format: 'cjs', file: './dist/index.cjs.js', sourcemap: false },
      { format: 'es', file: './dist/index.es.js', sourcemap: false },
    ],

    external: ['react', 'react-dom', 'prop-types', 'react-helmet', 'styled-components'].concat(
      tdsExternals
    ),

    plugins: [
      nodeResolve({
        extensions: ['.js', '.jsx'],
      }),
      commonjs({
        include: '../../node_modules/**',
        namedExports: {
          'airbnb-prop-types': ['childrenOfType'],
        },
      }),
      options.css &&
        postcss({
          extract: './dist/index.css',
          sourceMap: false,
          plugins: [autoprefixer()],
          modules: {
            Loader: CssModulesSassLoader,
            globalModulePaths: [/packages\/SelectorCounter/],
            generateScopedName: 'TDS_[name]__[local]___[hash:base64:5]',
          },
        }),
      babel({
        runtimeHelpers: true,
        exclude: '../../node_modules/**',
        configFile: '../../babel.config.js',
      }),
    ],
  }
}
