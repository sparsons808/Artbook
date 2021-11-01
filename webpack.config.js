const path = require('path');

module.exports = {
  entry: './frontend/entry.jsx',
  output: {
    // this is telling where the bundle.js file should go so that rails will load it
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'), 
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};