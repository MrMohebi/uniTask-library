<?php

namespace BDsConfig;

class MysqlConfig {
    const serveraddr = "";
    const dbuserrname = "";
    const dbpass = "";

    const dbname_admins = "";
    const dbname_books = "";
    const dbname_users = "";


    public static function connAdmins(){
        return mysqli_connect(self::serveraddr, self::dbuserrname, self::dbpass, self::dbname_admins);
    }
    public static function conUsers(){
        return mysqli_connect(self::serveraddr, self::dbuserrname, self::dbpass, self::dbname_users);
    }
    public static function connBooks(){
        return mysqli_connect(self::serveraddr, self::dbuserrname, self::dbpass, self::dbname_books);
    }

}