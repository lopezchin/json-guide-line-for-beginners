<?php

	//from dev server

	// header("Content-Type: application/json");

	// $host = "localhost";
	// $user = "root";
	// $password = "";
	// $database = "wwwphilw_1fx";

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


	if (isset($_GET['action']) ) {	

		$userName = isset($_GET['username']) ? $_GET['username'] : null;
		$passWord = isset($_GET['password']) ? $_GET['password'] : null;

	}else if (isset($_POST['action']) ){

		$userName = isset($_POST['username']) ? $_POST['username'] : null;
		$passWord = isset($_POST['password']) ? $_POST['password'] : null;

	}

	if($userName=="" || $passWord==""){
		$ret = array(
			'status' => 'error',
			'message' => 'Dont leave blank on Username or Password.'
		);

		echo json_encode($ret);
			
		exit();
		
	}

	// var_dump($userName . " - " . $passWord);

	$ret = array(
		'user'=> $userName,
		'password'  => $passWord,
		'status' => 'success',
		'message' => 'Successfully Signup!'
	);

	$query = "INSERT INTO users(user,password)
						 VALUES('$userName','$passWord')";

	mysql_query($query);
	
			
	echo json_encode($ret);
	exit();
	
?>