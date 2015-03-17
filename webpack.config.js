var webpack = require('webpack');
var version = require('./package.json').version;
var banner = 'Basal v' + version + ' | (c) Michael Krasnovsky ' +
    '<mkrasnovsky@gmail.com> | MIT License';

module.exports = {
    entry: './src/index',
    output: {
        path: __dirname + '/build',
        filename: 'basal.min.js',
        library: 'basal',
        libraryTarget: 'umd',
        sourcePrefix: ''
    },
    plugins: [
        new webpack.BannerPlugin(banner)
    ]
};
