const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		filename: "./dist/bundle.js",
	},
	devtool: 'source-map',
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2017']
			}
		}, {
			test: /\.html$/,
			loader: "html-loader"
		}]
	}
}
