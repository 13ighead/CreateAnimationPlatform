<?php
    date_default_timezone_set('Asia/Shanghai');
    ini_set('display_errors' , "off");

    require_once('libs/HttpClient.class.php');
    require_once('libs/Smarty.class.php');

    $smarty = new Smarty;
    $smarty -> template_dir = "templates"; //模板存放目录
    $smarty -> compile_dir = "templates_c"; //编译目录
    $smarty -> caching = false;
    $smarty -> debugging = false;
    $smarty -> left_delimiter = "{%"; //左定界符
    $smarty -> right_delimiter = "%}"; //右定界符
    $smarty -> config_dir = '../src';

    $pathname = str_replace('.php', '', $_GET['pathname']);

    unset($_GET['pathname']);

    $filename = './' . $pathname  . '.json';

    $data = file_get_contents($filename);

    $res = json_decode($data, true);

    $pathname = $_GET['webroot'] . '/smarty/'. $pathname .'.tpl';
    $res['feRoot'] = '';

    foreach ($res as $key => $value) {
        $smarty -> assign($key, $value);
    }
    $smarty -> display($pathname);
