var fs = require('fs');
var path = require('path');

module.exports = {
    entry: path.resolve('src', 'server', 'server.js'),
    output: {
        filename: 'server.bundle.js'
    },
    target: 'node',
    externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
        'react-dom/server', 'react/addons'
    ]).reduce(function (ext, mod) {
        ext[mod] = 'commonjs ' + mod;
        return ext
    }, {}),
    node: {
        __filename: true,
        __dirname: true
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
        ]
    }

};