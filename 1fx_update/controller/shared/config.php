<?php

header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");

// database connection
// $host = "localhost";
// $user = "wwwphilw_1fx";
// $password = "philweb223";
// $database = "wwwphilw_1fx";

$host = "localhost";
$user = "root";
$password = "";
$database = "wwwphilw_1fx";

$con = mysql_connect($host, $user, $password) or die("Could not connect: ". mysql_error());

mysql_select_db($database) or die("Could not connect to database: ". mysql_error());


?>