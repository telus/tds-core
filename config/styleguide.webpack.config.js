const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const autoprefixer = require('autoprefixer')

const devMode = process.env.NODE_ENV !== 'production'

const styleLoaderOrCssExtractLoader = devMode ? 'style-loader' : MiniCssExtractPlugin.loader

module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /(\.modules\.scss|flexboxgrid)/,
        use: [
          styleLoaderOrCssExtractLoader,
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
              plugins: [autoprefixer()],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.modules.scss$/,
        use: [styleLoaderOrCssExtractLoader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        exclude: /flexboxgrid/,
        use: [styleLoaderOrCssExtractLoader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: 'url-loader',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  ],
}
