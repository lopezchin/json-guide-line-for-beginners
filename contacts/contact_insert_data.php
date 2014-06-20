<?php

	//from dev server

	// header("Content-Type: application/json");

	// $host = "localhost";
	// $user = "root";
	// $password = "";
	// $database = "wwwphilw_1fx";

	header('content-type: application/json; charset=utf-8');
	header("access-control-allow-origin: *");
 

	$host = "localhost";
	$user = "root";
	$password = "";
	$database = "wwwphilw_1fx";

	$con = mysql_connect($host, $user, $password) or die("Could not connect: ". mysql_error());
	
	mysql_select_db($database) or die("Could not connect to database: ". mysql_error());


	if (isset($_REQUEST['action']) ) {

		$fullname = isset($_REQUEST['fullname']) ? $_REQUEST['fullname'] : null;
		$address = isset($_REQUEST['address']) ? $_REQUEST['address'] : null;
		$email = isset($_REQUEST['email']) ? $_REQUEST['email'] : null;
		$phone_number = isset($_REQUEST['phone_number']) ? $_REQUEST['phone_number'] : null;
		
	}

	if($fullname=="" || $address=="" || $email=="" || $phone_number ==""){
		$ret = array(
			'status' => 'error',
			'message' => 'Dont leave blank on the fields'
		);

		echo json_encode($ret);
			
		exit();
		
	}

	// var_dump($userName . " - " . $passWord);

	$ret = array(
		'fullname'=> $fullname,
		'address'=> $address,
		'email'=> $email,
		'phone_number'  => $phone_number,
		'status' => 'success',
		'message' => 'Successfully Signup!'
	);

	//$query = "INSERT INTO contacts(`id`, `fullname`, `address`, `email`, `phone_number`) VALUES (NULL, 'John Wayne Jose', 'New Jersey', 'philweb.seniorprogrammer05@gmail.com', '222 222-2222')";

	$query = "INSERT INTO contacts(fullname,address,email,phone_number)
						 VALUES('$fullname','$address','$email','$phone_number')";

			 
	mysql_query($query);
		
	echo json_encode($ret);
	exit();
	
?>