const path = require('path')
const MiniHtmlWebpackPlugin = require('mini-html-webpack-plugin')

const {
  generateAttributes,
  generateCSSReferences,
  generateJSReferences
} = MiniHtmlWebpackPlugin

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
  plugins: [
    new MiniHtmlWebpackPlugin({
      context: {
        title: 'TDS Cartesian Components',
        htmlAttributes: { lang: 'en' },
        cssAttributes: { rel: 'preload' },
        jsAttributes: { defer: 'defer' }
      },
      template: ({
        css,
        js,
        publicPath,
        title,
        htmlAttributes,
        cssAttributes,
        jsAttributes
      }) => {
        const htmlAttrs = generateAttributes(htmlAttributes);

        const cssTags = generateCSSReferences({
          files: css,
          attributes: cssAttributes,
          publicPath
        });

        const jsTags = generateJSReferences({
          files: js,
          attributes: jsAttributes,
          publicPath
        });

        return `<!DOCTYPE html>
        <html${htmlAttrs}>
          <head>
            <meta charset="UTF-8">
            <title>${title}</title>
            ${cssTags}
          </head>
          <body>
            <div id="app"></div>
            ${jsTags}
          </body>
        </html>`;
      }
    })
  ],
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
