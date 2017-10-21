const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {

  target: 'node',

  entry: './src/index.js',

  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'main.js',
    libraryTarget: 'commonjs'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },

  externals: [nodeExternals()]

}
