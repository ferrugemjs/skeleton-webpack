module.exports = {
    entry: './app/app.js',
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
        loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
			,{ test: /\.html$/,loader:'ferrugemjs-loader'}
			,{ test: /\.css$/, loader: "style!css" }
		]
    }
	,resolve: {
		extensions: [".js",".html"]
		,alias:{    		
			"app":__dirname + '/app'
			,"root_app":__dirname + '/app'
			,"ferrugemjs":"ferrugemjs/dist/core"
		}    
	}
}