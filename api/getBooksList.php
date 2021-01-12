<?php
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

$authentication = true;

if($authentication){
    include_once "DataAccess/MysqldbAccess.php";
    include_once "DataAccess/db.config.php";

    $bookConn = new \DBs\MysqldbAccess(\BDsConfig\MysqlConfig::connBooks());

    exit(json_encode(array(
        'statusCode'=>200,
        'data'=>$bookConn->select("*", "books"),
    )));


}else{
    exit(json_encode(array('statusCode'=>401)));

}