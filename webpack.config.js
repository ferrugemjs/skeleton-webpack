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
					presets: ['env']
				}
			}
			,{ test: /\.css$/, loader: 'style!css' }
			,{
        		test: /\.pug$/,
        		loaders: [
							{
								loader: 'babel-loader',
								query: {
									presets: ['env']
								}	
							}
	        				,{ 
	        					loader:'ferrugemjs-loader'
	        					,options:{
									templateExtension:'.pug'
								} 
							}
	        				,'pug-html-loader'
        				]
      		}
		]
    }
	,resolve: {
		extensions: ['.js','.pug']
		,alias:{
			'@': path.resolve(__dirname, './app')
		}    
	}
}