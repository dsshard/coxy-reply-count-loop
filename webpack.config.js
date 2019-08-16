const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [{
      test: /\.(js)(\?.*$|$)/,
      exclude: [/node_modules/],
      include: path.resolve(__dirname, 'src'),
      use: 'babel-loader',
    }],
  },
};
