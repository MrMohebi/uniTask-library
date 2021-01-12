<?php
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

if(isset($_POST['idCard'])){
    include_once "DataAccess/MysqldbAccess.php";
    include_once "DataAccess/db.config.php";

    $userConn = new \DBs\MysqldbAccess(\BDsConfig\MysqlConfig::conUsers());

    $userSqlParams = array(
        'name'=>$_POST['name'],
        'id_card'=>$_POST['idCard'],
        'password'=>$_POST['password'],
        'phone'=>$_POST['phone'],
        'email'=>$_POST['email'],
    );

    if($userConn->insert('users_info', $userSqlParams)){
        exit(json_encode(array('statusCode'=>200)));
    }else{
        exit(json_encode(array('statusCode'=>500)));
    }

}else{
    exit(json_encode(array('statusCode'=>402)));
}
