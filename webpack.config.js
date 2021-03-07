var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ['babel-polyfill', './app/index.jsx'],
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.js.map'
  },
  devtool: '#eval-source-map',
  plugins:[
   new HtmlWebpackPlugin({
       filename: "index.html",
       template: "app/index.html"
   })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [/app/],
        query: {
          presets: ['es2015','stage-2', 'react']
        }
      },{
    	  test: /\.html$/,
    	  loader: "html-loader"
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /node_modules/,
      },
      { test: /\.json$/, loader: "json-loader" }
    ]
  },
devServer: {
  contentBase: __dirname + "/app/assets"
}
};
