module.exports = {

  entry: './simple.ts',
  
  output: {
    filename: 'app.js',
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