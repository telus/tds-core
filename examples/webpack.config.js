const path = require('path')

module.exports = {
  mode: 'development',
  entry: './index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
  },
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
