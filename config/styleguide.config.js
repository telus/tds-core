module.exports = {
  components: '../src/components/**/*.jsx',
  webpackConfig: {
    module: {
      loaders: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.png$/,
          use: 'url-loader?mimetype=image/png'
        }
      ]
    }
  }
}
