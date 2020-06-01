module.exports = {
	module: {
		rules: [
			{
				test: /\.jsx?$/g,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	}
};