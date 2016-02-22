<?php /* Smarty version Smarty-3.1.13, created on 2016-02-22 17:27:13
         compiled from "/Users/xijun/Develop/BH/FE/createAnimationPlatform/src/index.tpl" */ ?>
<?php /*%%SmartyHeaderCode:119468948256cad131169354-36676489%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '5bbc1aa0dfdf01860943140d259fad103c2a2969' => 
    array (
      0 => '/Users/xijun/Develop/BH/FE/createAnimationPlatform/src/index.tpl',
      1 => 1456132746,
      2 => 'file',
    ),
    'b9eabefeba4b6ca6d1411e3e7bed5ee350917fc4' => 
    array (
      0 => '/Users/xijun/Develop/BH/FE/createAnimationPlatform/src/common/base.tpl',
      1 => 1456133180,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '119468948256cad131169354-36676489',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_56cad1311c3909_69683983',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_56cad1311c3909_69683983')) {function content_56cad1311c3909_69683983($_smarty_tpl) {?><!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><title>demo</title>
<meta name="Description" content="">
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black"><meta name="format-detection" content="telephone=no">
<link rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['feRoot']->value;?>
/src/index.css?v={edp-variable:version}">
<script src="http://s1.bdstatic.com/r/www/cache/ecom/esl/2-0-4/esl.js"></script></head><body>
<div class="scene outer">
    <div class="element-container">
        <div class="element inner inner1" data-draggable="true">
        </div>
    </div>

    <div class="element-container">
        <div class="element inner inner2" data-draggable="true">
        </div>
    </div>

    <div class="origin">
    </div>
</div>

<script>require.config({'baseUrl': '../../src','paths': {},'packages': [{'name': 'est','location': '../dep/est/2.0.4/src','main': 'lib/index'},{'name': 'etpl','location': '../dep/etpl/3.1.0/src','main': 'main'},{'name': 'jquery','location': '../dep/jquery/1.11.1/src','main': 'jquery'}],'urlArgs': 'v={edp-variable:version}'});
require(['index'], function (main) {
    main.init();
});
</script>
</body></html>
<?php }} ?>