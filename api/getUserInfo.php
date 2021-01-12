<?php
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');


if(isset($_POST['userId'])){
    include_once "DataAccess/MysqldbAccess.php";
    include_once "DataAccess/db.config.php";

    $userId = $_POST['userId'];

    $userConn = new \DBs\MysqldbAccess(\BDsConfig\MysqlConfig::conUsers());

    exit(json_encode(array(
        'statusCode'=>200,
        'data'=>$userConn->select("*", "users_info", "`id`='$userId'"),
    )));


}else{
    exit(json_encode(array('statusCode'=>401)));

}