const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const MyWebpackPlugin = require("./my-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		// rules: [
		// 	{
		// 		test: /\.less$/i,
		// 		use: [
		// 			{
		// 				loader: 'style-loader',
		// 			},
		// 			{
		// 				loader: 'css-loader',
		// 			},
		// 			{
		// 				loader: 'less-loader',
		// 				options: {
		// 					lessOptions: {
		// 						strictMath: true,
		// 					},
		// 				},
		// 			},
		// 		],
		// 	},
		// ],
	},
	plugins: [
		// new HtmlWebpackPlugin({
		// 	template: "index.html",
		// 	title: "html-webpack-env-plugin"
		// }),
		new MyWebpackPlugin()
	]
};
