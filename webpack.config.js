var path = require('path');

var libraryTarget = (process.env.LIBRARY_TARGET ? process.env.LIBRARY_TARGET : 'amd');
var config = {
	entry: {
		'ab-jsmodule-template': './js/index.js'
	},
	output: {
		library: '[name]',
		libraryTarget: libraryTarget,
		path: './dist/',
		filename: '[name].' + libraryTarget + '.js',
		publicPath: '/assets/' /* For dev server */
	},
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: [
                    path.resolve(__dirname, "js")
                ]
            }
        ],
        noParse: [
            path.resolve(__dirname, "lib")
        ]
    },
};

if (libraryTarget === 'var') {
    config.output.library = 'abJsModuleTemplate';
    config.output.filename = '[name].js';
}

module.exports = exports = config;
