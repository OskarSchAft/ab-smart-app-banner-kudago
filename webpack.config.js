var libraryTarget = (process.env.LIBRARY_TARGET ? process.env.LIBRARY_TARGET : 'amd');
module.exports = {
	entry: {
		'ab-jsmodule-template': './js/index.js'
	},
	output: {
		library: '[name]',
		libraryTarget: libraryTarget,
		path: './dist/',
		filename: '[name].' + libraryTarget + '.js',
		publicPath: '/assets/' /* For dev server */
	}
};
