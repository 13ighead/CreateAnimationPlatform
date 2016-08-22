/**
 * @file webpack.config.js
 * @author Bighead
 */

module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.less$/i,
                loader: 'style!css!less'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080
    },
    devtool: 'source-map',
    plugins: []
};
