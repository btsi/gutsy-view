module.exports = {
  watch: true,
  entry: './src/index.js',
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,

        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico|jpeg)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[path][name]-[hash:8].[ext]'
                },
            },
        ]
    },
    
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
};