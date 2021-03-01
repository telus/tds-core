import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import babel from 'rollup-plugin-babel'

import svg from 'rollup-plugin-react-svg'

import postcss from 'rollup-plugin-postcss'

import autoprefixer from 'autoprefixer'

import cleaner from './rollup/rollup-plugin-cleaner'

export default opts => {
  const options = {
    css: false,
    ...opts,
  }

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
      cleaner({
        targets: ['./dist/'],
      }),
      svg(),
      nodeResolve({
        extensions: ['.js', '.jsx'],
        browser: true,
      }),
      commonjs({
        include: '../../node_modules/**',
      }),
      options.css &&
        postcss({
          extract: './dist/index.css',
          sourceMap: false,
          plugins: [autoprefixer()],
        }),
      babel({
        runtimeHelpers: true,
        exclude: '../../node_modules/**',
        configFile: '../../babel.config.js',
      }),
    ],
  }
}
