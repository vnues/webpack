class MyWebpackPlugin {
	constructor(options) {
		this.options = options;
	}
	apply(compiler) {
		compiler.hooks.compilation.tap("MyWebpackPlugin", compilation => {
			console.log("MyWebpackPlugin");
		});
	}
}

module.exports = MyWebpackPlugin;
