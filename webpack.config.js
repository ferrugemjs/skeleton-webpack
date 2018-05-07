var path = require('path');
var mode = 'development';
// mode = 'production';
module.exports = {
  mode,
    entry: {    
      app:['./app/main.js']
    },
    output: {
      path: __dirname+'/public', 
      filename: 'bundle.js'
    },
    devServer: {
      inline: true,
      contentBase: './public',
      port: 3333
    },
    module: {
      rules: [
      {
          enforce: "pre",
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.pug$/,
        loaders: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            } 
          },
          { 
            loader:'ferrugemjs-loader',
            options:{
              templateExtension:".pug"
            } 
          }
          ,'pug-html-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js",".pug"],
    alias:{
      "@":__dirname + '/app'
    }
  }
}
