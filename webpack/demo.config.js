var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var extend = require('extend');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = require('../package.json');

var baseFileDir = path.join(process.cwd(), 'example/');

var getEntry =function() {
    var basedir =baseFileDir+'src';
    var files = glob.sync(path.join(basedir, '*.js'));

    var webpackConfigEntry = {};//webpackConfig.entry || (webpackConfig.entry = {});

    files.forEach(function(file) {
        var relativePath = path.relative(basedir, file);

        webpackConfigEntry[relativePath] = file;
    });
    return webpackConfigEntry;
};

module.exports =extend({}, {
    entry: [path.join(process.cwd(), 'example/src/index.js')],
    output: {
        libraryTarget: 'umd',
        path: path.join(process.cwd(), 'example/dist'),
        filename: 'examples.js'
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader : 'url-loader'
            },
            { 
                test: /\.html$/, 
                loader: "handlebars-loader" 
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=35000'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
});
