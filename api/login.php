<?php
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

if(isset($_POST['idCard']) && isset($_POST['password'])){
    include_once "DataAccess/MysqldbAccess.php";
    include_once "DataAccess/db.config.php";

    $username = $_POST['idCard'];
    $pass = $_POST['password'];

    $userLogin = new \DBs\MysqldbAccess(\BDsConfig\MysqlConfig::conUsers());
    $adminLogin = new \DBs\MysqldbAccess(\BDsConfig\MysqlConfig::connAdmins());

    $userList = $userLogin->select("*", "users_info", "`id_card`='$username'");
    if($userList[0]['password'] == $pass){
        exit(json_encode(array(
            'statusCode'=>200,
            'data'=>array(
                'position'=>"user",
                "id"=>$userList[0]['id']
            ))));
    }else{
        $adminList = $adminLogin->select("*", "admins_info", "`username`='$username'");
        if($adminList[0]['password'] == $pass){
            exit(json_encode(array(
                'statusCode'=>200,
                'data'=>array(
                    'position'=>"admin",
                    "id"=>$adminList[0]['id']
                ))));
        }
    }

    exit(json_encode(array('statusCode'=>401, "details"=>"username Or password is wrong")));

}else{
    exit(json_encode(array('statusCode'=>402)));
}