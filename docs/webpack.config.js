var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'src', 'html', 'assets', 'bundles'),
    filename: 'docs.js'
  },
  plugins: [
    new ExtractTextPlugin('docs.css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      ENV: JSON.stringify('PRODUCTION'),
      "process.env": {
        NODE_ENV: '"production"',
        BROWSER: JSON.stringify(true)
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!postcss!sass')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    alias: {
     'telus-thorium-core': path.resolve(__dirname, '..', 'core'),
     'telus-thorium-enriched': path.resolve(__dirname, '..', 'enriched', 'src')
   }
  },
  postcss: () => [autoprefixer],
  sassLoader: {
    data: "$thorium-icon-font-prefix: '/assets/fonts';"
  }
};
