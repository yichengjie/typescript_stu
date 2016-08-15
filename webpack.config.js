module.exports = {

  entry: './demo01/demo01.ts',
  
  output: {
    filename: 'app.js',
    path: './dist'
  },
  
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
  
}