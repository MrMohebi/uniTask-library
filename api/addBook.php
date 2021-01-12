<?php
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

if(isset($_POST['bookName'])){
    include_once "DataAccess/MysqldbAccess.php";
    include_once "DataAccess/db.config.php";

    $bookName = $_POST['bookName'];
    $number = $_POST['number'];
    $details = $_POST['details'];
    $status = $_POST['status'];

    $bookConn = new \DBs\MysqldbAccess(\BDsConfig\MysqlConfig::connBooks());

    $bookSqlParams = array(
        'name'=>$bookName,
        'details'=>$details,
        'stock'=>$number,
        'downloads'=>0,
        'reserves'=>0,
        'status'=>$status,
    );

    if($bookConn->insert('books', $bookSqlParams)){
        exit(json_encode(array('statusCode'=>200)));
    }else{
        exit(json_encode(array('statusCode'=>500)));
    }


}else{
    exit(json_encode(array('statusCode'=>402)));
}