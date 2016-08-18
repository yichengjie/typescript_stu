var failPlugin = require('webpack-fail-plugin');
module.exports = {

  entry: './index.ts',
  
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader?compiler=ntypescript' }
    ]
  },
  ts: {
    compiler: 'ntypescript'
  },
  plugins: [
     failPlugin
  ]
  
}