var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/assets/js/index.js',
  output: {
    path: path.resolve(__dirname, 'src', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      ENV: JSON.stringify('PRODUCTION')
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
