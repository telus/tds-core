const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    disableHostCheck: true,
    historyApiFallback: true,
    contentBase: [path.join(__dirname, 'dist')],
  },
  plugins: [new HtmlWebpackPlugin({ template: path.join(__dirname, 'index.html') })],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: false, // TODO: remove once .babelrc is removed. See jest config.
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
        },
      },
      {
        test: /flexboxgrid/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: 'TDS_[name]__[local]___[hash:base64:5]',
              importLoaders: 2, // Number of loaders applied before CSS loader
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('autoprefixer')()],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /flexboxgrid/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: 'url-loader',
      },
    ],
  },
}
