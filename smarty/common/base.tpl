{%strip%}
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>{%block name="title"%}animationDemo{%/block%}</title>
    {%block name="seo"%}{%/block%}
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no">
    {%block name="style"%}{%/block%}
    {%block name="esl"%}<script src="http://s1.bdstatic.com/r/www/cache/ecom/esl/2-0-4/esl.js"></script>{%/block%}
</head>
<body>
    {%block name="main"%}
    {%/block%}
    {%block name="footer"%}
    {%/block%}
    {%block name="mainjs"%}
    <script>
        require.config({
            'baseUrl': '../../src',
            'paths': {},
            'packages': [
                {
                    'name': 'est',
                    'location': '../dep/est/2.0.4/src',
                    'main': 'lib/index'
                },
                {
                    'name': 'etpl',
                    'location': '../dep/etpl/3.1.0/src',
                    'main': 'main'
                },
                {
                    'name': 'jquery',
                    'location': '../dep/jquery/1.11.1/src',
                    'main': 'jquery'
                }
            ],
            'urlArgs': 'v={edp-variable:version}'
        });
    </script>
    {%/block%}
    {%block name="js"%}
    <script>
    require(['src/common/main'], function (main) {
        main.init();
    });
    </script>
    {%/block%}
</body>
</html>
{%/strip%}
