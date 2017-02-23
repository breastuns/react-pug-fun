module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname + "/build",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
				 	presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				loaders: ["style-loader", "css-loader"]
			}
		]
	}
}
