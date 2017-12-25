var path = require('path');
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
			,{ test: /\.css$/, loader: "style!css" }
			,{
        		test: /\.pug$/,
        		loaders: [
							{
								loader: 'babel-loader',
								query: {
									presets: ['es2015']
								}	
							}
	        				,{ 
	        					loader:'ferrugemjs-loader'
	        					,options:{
									templateExtension:".pug"
								} 
							}
	        				,'pug-html-loader'
        				]
      		}
		]
    }
	,resolve: {
		extensions: [".js",".pug"]
		,alias:{    		
			"app":__dirname + '/app'
			,"root_app":__dirname + '/app'
			,"ferrugemjs":"ferrugemjs/dist/core"
		}    
	}
}