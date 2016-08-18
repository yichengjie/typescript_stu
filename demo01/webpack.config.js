module.exports = {

  entry: './demo01.ts',
  
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
  
}