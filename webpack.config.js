const path = require('path');

module.exports = {
   entry: './src/app/main.js',
   output: {
       path: path.resolve(__dirname, './src/public'),
       filename: 'bundle.js'
   },
   module: {
     rules: [
    {
      test: /\.js$/,
      use: {
        loader: "babel-loader",
        options: { presets: ["es2015"] }
      }
    },
    {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
    }
  ]
  },
  stats: {
      colors: true
  },
  devtool: 'source-map'
};