var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './src/js/index.js'
  ],
  devServer: {
    hot: true,
    host: '0.0.0.0',
    inline: true,
    progress: true,
    status: 'errors-only',
    port: 8081,
    proxy: {
      '*': 'http://localhost:8080'
    }
  },
  devServerClient: 'webpack-dev-server/client?http://0.0.0.0:8081',
  output: {
    path: path.resolve(__dirname, 'src', 'html', 'assets', 'bundles'),
    filename: 'docs.js',
    publicPath: 'http://0.0.0.0:8081/assets/bundles/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      ENV: JSON.stringify('DEVELOPMENT'),
      "process.env": {
        NODE_ENV: '"development"',
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
        loaders: ['style', 'css', 'postcss', 'sass']
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
