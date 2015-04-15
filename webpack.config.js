module.exports = {
    entry: './one.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
        libraryTarget: 'umd'
    },
    resolve: {
    	modulesDirectories: ['.', 'bower_components'],
    	alias: {
    		'angular': 'angular/angular'
    	}
  	},
  	module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /[\/]angular\.js$/, loader: "exports?angular" }
        ]
    },
    externals: {
    	'angular': 'angular'
    }
};