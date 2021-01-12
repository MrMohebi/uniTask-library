<?php

namespace DBs;

class MysqldbAccess{

    private $dbConn;
    function __construct($dbConn){
        $this->dbConn = $dbConn;
    }

    public function select($selector, $tableName, $condition = false , $orderedBy = false ){
        $sqlCommand = "SELECT $selector FROM `$tableName` ";
        if($condition)
            $sqlCommand .= " WHERE $condition ";
        if ($orderedBy)
            $sqlCommand .= " ORDER BY $condition ";
        $sqlCommand .= ";";

        $queryResult = array();
        if ($result = mysqli_query($this->dbConn, $sqlCommand)) {
            while ($row = mysqli_fetch_assoc($result)) {
                array_push($queryResult, $row);
            }
        }else{
            return false;
        }

        return count($queryResult) > 0 ? $queryResult :  false ;
    }

    public function insert($tableName, $keyValObject){
        if(!(count($keyValObject) > 0))
            return false;

        $sqlCommand = "INSERT INTO `$tableName`  ";
        $keys = "(";
        $values = " VALUES ( ";
        foreach ($keyValObject as $key=>$val){
            $keys .= "`$key`,";
            $values .= "'$val',";
        }
        $keys =  rtrim($keys, ", ") . ") ";
        $values = rtrim($values, ", ") . ") ;";

        $sqlCommand .= $keys . $values;

        return mysqli_query($this->dbConn, $sqlCommand) ? true: false;
    }
}




