<?php
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

if(isset($_POST['userId'])){
    include_once "DataAccess/MysqldbAccess.php";
    include_once "DataAccess/db.config.php";

    $userBook = new \DBs\MysqldbAccess(\BDsConfig\MysqlConfig::connBooks());

    $bookSqlParams = array(
        'user_id'=>$_POST['userId'],
        'book_id'=>$_POST['bookId'],
        'reserve_date'=>time(),
        'status'=>"رزرو شده",
    );

    if($userBook->insert('reserves', $bookSqlParams)){
        exit(json_encode(array('statusCode'=>200)));
    }else{
        exit(json_encode(array('statusCode'=>500)));
    }

}else{
    exit(json_encode(array('statusCode'=>402)));
}
