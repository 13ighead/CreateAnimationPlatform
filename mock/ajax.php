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

    function mk_dir($dir, $mode = 0755) {
        if (is_dir($dir) || @mkdir($dir,$mode)) return true;
        if (!mk_dir(dirname($dir),$mode)) return false;
        return @mkdir($dir,$mode);
    }

    // 这里进行了一次路由转换 从request path 到 mock path
    $map = array(
        '/test'  => '/index'
    );

    $result = $map[$pathname];

    if ($result) {
        $pathname = $result;
    } else {
        $errMsg = $pathname . " is not found in map.";
        echo json_encode(array(
            "msg" => $errMsg,
        ));
        throw new Exception($errMsg);

    }

    unset($_GET['pathname']);

    $filename = '.' . $pathname . '.json';

    $data = file_get_contents($filename);

    echo $data;
