<?php

	//from dev server

	header("Content-Type: application/json");

	$host = "localhost";
	$user = "root";
	$password = "";
	$database = "wwwphilw_1fx";

	$con = mysql_connect($host, $user, $password) or die("Could not connect: ". mysql_error());
	
	mysql_select_db($database) or die("Could not connect to database: ". mysql_error());

	if (isset($_POST['action']) ) {

		// var_dump('yes' . " - " . $_POST['username']);

		$userName = isset($_POST['username']) ? $_POST['username'] : null;
		$passWord = isset($_POST['password']) ? $_POST['password'] : null;

		var_dump($userName . " - " . $passWord);

		$query = "INSERT INTO users(user,password)
							 VALUES('$userName','$passWord')";

		mysql_query($query);

	};
	
?>