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
            }
        ]
    },
    plugins: []
};
