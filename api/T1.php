<?php

include_once "DataAccess/MysqldbAccess.php";
include_once "DataAccess/db.config.php";

$userConn = new \DBs\MysqldbAccess(\BDsConfig\MysqlConfig::conUsers());

print_r($userConn->select("*", "users_info"));

















