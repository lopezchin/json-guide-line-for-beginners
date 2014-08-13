<?php

	//from Local

	header("Content-Type: application/json");
	
	//BELOW CODE ARE PROVEN AND TESTED THAT RESULT WILL SHOW AND THE ITEM'S WILL BE IN JSON FORMAT
	// header('content-type: application/json; charset=utf-8');
	// header("access-control-allow-origin: *");

	// if(isset($_POST['limit'])){
	// 	$limit = preg_replace('#[^0-9]#', '', $_POST['limit']);
		
	if (isset($_REQUEST['action']) ) {

		$contactID = isset($_REQUEST['contactid']) ? $_REQUEST['contactid'] : null;
		
	}
	
	// database connection
	$host = "localhost";
	$user = "root";
	$password = "";
	$database = "wwwphilw_1fx";

	$con = mysql_connect($host, $user, $password) or die("Could not connect: ". mysql_error());
	
	mysql_select_db($database) or die("Could not connect to database: ". mysql_error());

	$i = 0;

	// $sqlString = "SELECT * FROM users" ;
	//$sqlString = "SELECT * FROM users WHERE user = 'johnwaynejose' AND password = 'philweb223'"; //fetch compared database

	// $jsonData = '{'; //comment if single data fetched

    $sqlString = "SELECT * FROM contacts WHERE id = '$contactID'";
    $query = mysql_query($sqlString) or die (mysql_error()); 
    while ($row = mysql_fetch_array($query)) {
      $i++;
      $id = $row["id"]; 
      $fullname = $row["fullname"];
      $address  = $row["address"];
      $email  = $row["email"];
      $phone_number  = $row["phone_number"];
      $status = 'success';
      $jsonData = '{ "id":"'.$id.'","fullname":"'.$fullname.'", "address":"'.$address.'", "email":"'.$email.'", "phone":"'.$phone_number.'", "status":"'.$status.'" },';
    }

  	$jsonData = chop($jsonData, ",");
  
  	// $jsonData .= '}'; //comment if single data fetched

  	echo $jsonData;

?>