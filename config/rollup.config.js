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
      { format: 'cjs', file: './dist/index.cjs.js', sourcemap: true },
      { format: 'es', file: './dist/index.es.js', sourcemap: true },
    ],

    external: ['react', 'react-dom', 'prop-types'].concat(tdsExternals),

    plugins: [
      nodeResolve({
        extensions: ['.js', '.jsx'],
      }),
      commonjs({
        include: '../../node_modules/**',
        namedExports: {
          'airbnb-prop-types': ['childrenOfType', 'componentWithName'],
        },
      }),
      options.css &&
        postcss({
          extract: './dist/index.css',
          sourceMap: true,
          plugins: [autoprefixer()],
          modules: {
            Loader: CssModulesSassLoader,
            globalModulePaths: [/packages\/SelectorCounter/],
            generateScopedName: 'TDS_[name]__[local]___[hash:base64:5]',
          },
        }),
      babel({
        plugins: ['external-helpers'],
        exclude: '../../node_modules/**',
      }),
    ],
  }
}
