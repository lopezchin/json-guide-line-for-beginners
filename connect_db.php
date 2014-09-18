<?php
	
	$host = "localhost";
	$user = "root";
	$password = "";
	$database = "database";

	$con = mysql_connect($host, $user, $password) or die("Could not connect: ". mysql_error());
	
	mysql_select_db($database) or die("Could not connect to database: ". mysql_error());


?>