var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');
var dir = __dirname + '/examples';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  noInfo: false,
  historyApiFallback: true,
  proxy: {
    '*': 'http://localhost:8080'
  }
}).listen(3000, function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3000');
});