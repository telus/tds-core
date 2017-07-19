import path from 'path';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

import babel from 'rollup-plugin-babel';

import sass from 'rollup-plugin-sass';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

export default {
  entry: path.resolve('./src/index.js'),
  targets: [
    { format: 'cjs', dest: path.resolve('./dist/tds.cjs.js') },
    { format: 'es', dest: path.resolve('./dist/tds.es.js') }
  ],
  sourceMap: true,

  external: ['react', 'prop-types', '@telusdigital/redux-contentful'],

  plugins: [
    resolve({
      extensions: ['.js', '.jsx']
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    sass({
      output: path.resolve('./dist/tds.css'),
      processor(css) {
        return postcss([autoprefixer])
          .process(css)
          .then(result => result.css);
      }
    }),
    babel({
      plugins: ['external-helpers'],
      exclude: 'node_modules/**'
    })
  ]
};
