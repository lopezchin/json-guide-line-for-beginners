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

		$contactID = isset($_REQUEST['contactid']) ? $_REQUEST['contactid'] : null;
		
	}

	if($contactID==""){
		$ret = array(
			'status' => 'error',
			'message' => 'No user selected'
		);

		echo json_encode($ret);
			
		exit();
		
	}

	// var_dump($userName . " - " . $passWord);

	$ret = array(
		'id'=> $contactID,
		'status' => 'success',
		'message' => 'Successfully Signup!'
	);

	//$query = "INSERT INTO contacts(`id`, `fullname`, `address`, `email`, `phone_number`) VALUES (NULL, 'John Wayne Jose', 'New Jersey', 'philweb.seniorprogrammer05@gmail.com', '222 222-2222')";

	$query = "DELETE FROM contacts WHERE id = ".$contactID." LIMIT 1;";

	// $query = "INSERT INTO contacts(fullname,address,email,phone_number)
	// 					 VALUES('$fullname','$address','$email','$phone_number')";

			 
	mysql_query($query);
		
	echo json_encode($ret);
	exit();
	
?>