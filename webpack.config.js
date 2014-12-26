var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/app.js',
    vendor: ['react']
  },
  output: {
    path: './dist/js',
    filename: 'app.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ],
  module: {
    loaders: [{
      test: /.js$/,
      loader: '6to5-loader'
    }, {
      test: /.scss$/,
      loader: 'style!css!sass'
    }]
  }
};
