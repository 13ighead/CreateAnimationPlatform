<?php /* Smarty version Smarty-3.1.13, created on 2016-02-22 17:09:15
         compiled from "/Users/xijun/Develop/BH/FE/createAnimationPlatform/src/main/index.tpl" */ ?>
<?php /*%%SmartyHeaderCode:66594563456cad03bbebfb6-08987235%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'a12637d8a97bd46d9aa5d7860e01eb7998ed597e' => 
    array (
      0 => '/Users/xijun/Develop/BH/FE/createAnimationPlatform/src/main/index.tpl',
      1 => 1456131869,
      2 => 'file',
    ),
    'b9eabefeba4b6ca6d1411e3e7bed5ee350917fc4' => 
    array (
      0 => '/Users/xijun/Develop/BH/FE/createAnimationPlatform/src/common/base.tpl',
      1 => 1456131728,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '66594563456cad03bbebfb6-08987235',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'feRoot' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.13',
  'unifunc' => 'content_56cad03bc4fa46_79885091',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_56cad03bc4fa46_79885091')) {function content_56cad03bc4fa46_79885091($_smarty_tpl) {?><!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><title>demo</title>
<meta name="Description" content="">
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black"><meta name="format-detection" content="telephone=no">
<link rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['feRoot']->value;?>
/src/main/index.css?v={edp-variable:version}">
<script src="http://s1.bdstatic.com/r/www/cache/ecom/esl/2-0-4/esl.js"></script></head><body><div id="viewport">

</div></body><script>require.config({'baseUrl': '<?php echo $_smarty_tpl->tpl_vars['feRoot']->value;?>
/src','paths': {},'packages': [{{"name": "est","location": "../dep/est/2.0.4/src","main": "lib/index"},{"name": "etpl","location": "../dep/etpl/3.1.0/src","main": "main"}],urlArgs: 'v={edp-variable:version}'});require(['src/common/main'], function (main) {main.init();});</script>
</html>
<?php }} ?>