import path from 'path';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';

export default {
  entry: path.resolve('./src/rollup-main.js'),
  targets: [
    { format: 'cjs', dest: path.resolve('./dist/tds.cjs.js') },
    { format: 'es', dest: path.resolve('./dist/tds.es.js') }
  ],
  sourceMap: true,

  external: ['react', 'prop-types'],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx']
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    sass({
      output: path.resolve('./dist/tds.css')
    }),
    babel({
      babelrc: false,
      presets: [
        ['es2015', { modules: false }],
        'react',
        'stage-2'
      ],
      plugins: ['external-helpers'],
      exclude: 'node_modules/**'
    })
  ]
};
