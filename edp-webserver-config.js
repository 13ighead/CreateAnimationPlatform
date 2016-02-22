/**
 * @file config edp-webserver
 * @author EFE
 */

/* globals home, redirect, content, empty, autocss, file, less, stylus, proxyNoneExists */

/*eslint-disable*/
exports.port = 8848;
exports.directoryIndexes = true;
exports.documentRoot = __dirname;
exports.getLocations = function () {
    return [
        {
            location: /\/$/,
            handler: home('index.html')
        },
        {
            location: /^\/redirect-local/,
            handler: redirect('redirect-target', false)
        },
        {
            location: /^\/redirect-remote/,
            handler: redirect('http://www.baidu.com', false)
        },
        {
            location: /^\/redirect-target/,
            handler: content('redirectd!')
        },
        {
            location: '/empty',
            handler: empty()
        },
        {
            location: /\.css($|\?)/,
            handler: [
                autocss()
            ]
        },
        {
            location: /\.less($|\?)/,
            handler: [
                file(),
                less()
            ]
        },
        {
            location: /\.styl($|\?)/,
            handler: [
                file(),
                stylus()
            ]
        },
        // 后缀为php的请求重定向
        {
            location: function (req) {
                return /\.php($|\?)/.test(req.pathname) || !(/\./.test(req.pathname));
            },
            handler: [
                php('php-cgi', '', function (context) {

                    var request = context.request;
                    var pathname = request.pathname;
                    var search = request.search || '';
                    var query = request.query || {};

                    return {
                        pathname: '/mock/index.php',
                        search: search + (search.indexOf('?') === -1 ? '?' : '&') + 'pathname=' + pathname + '&webroot=' + __dirname
                    };
                }),
                livereload({
                    port: 8899
                })
            ]
        },
        {
            location: /^.*$/,
            handler: [
                file(),
                proxyNoneExists()
            ]
        }
    ];
};

/* eslint-disable guard-for-in */
exports.injectResource = function (res) {
    for (var key in res) {
        global[key] = res[key];
    }
};
