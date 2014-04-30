<?php

	//from dev server

	header("Content-Type: application/json");

	//to have access live use this 2 header below
	// header('content-type: application/json; charset=utf-8');
	// header("access-control-allow-origin: *");


	//if live change this to your host, user, password, and live database

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

		if($query=='' && $query==null){
			$message="Error Occur!";
			echo "<script type='text/javascript'>alert('$message');</script>";
		}else{
			mysql_query($query);
		}

	};
	
?>