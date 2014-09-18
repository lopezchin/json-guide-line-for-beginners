<?php

	//from 

	// header("Content-Type: application/json");
	

	// $folder = "gallery1";

	// $host = "localhost";
	// $user = "wwwphilw_1fx";
	// $password = "philweb223";
	// $database = "wwwphilw_1fx";

	// $con = mysql_connect($host, $user, $password) or die("Could not connect: ". mysql_error());
	
	// mysql_select_db($database) or die("Could not connect to database: ". mysql_error());

	// $sqlString = "SELECT * FROM users";

	// $query = mysql_query($sqlString) or die (mysql_error());
	
	// $i = 0;

	// while ($row = mysql_fetch_array($query)) {
	// 	$i++;
 //    	$id = $row["id"]; 
 //    	$user = $row["user"];
	// 	$password  = $row["password"];

	// 	echo $id."\n".$user."\n".$password."<br/>";
	// }

	
	//BELOW CODE ARE PROVEN AND TESTED THAT RESULT WILL SHOW AND THE ITEM'S WILL BE IN JSON FORMAT
	header('content-type: application/json; charset=utf-8');
	header("access-control-allow-origin: *");

	// if(isset($_POST['limit'])){
	// 	$limit = preg_replace('#[^0-9]#', '', $_POST['limit']);
		if (isset($_GET['action']) ) {

			// var_dump('yes' . " - " . $_POST['username']);

			$userName = isset($_GET['username']) ? $_GET['username'] : null;
			$passWord = isset($_GET['password']) ? $_GET['password'] : null;

			var_dump($userName . " - " . $passWord);	

		};
		
		// database connection
		$host = "localhost";
		$user = "root";
		$password = "";
		$database = "wwwphilw_1fx";

		$con = mysql_connect($host, $user, $password) or die("Could not connect: ". mysql_error());
		
		mysql_select_db($database) or die("Could not connect to database: ". mysql_error());

		$i = 0;
		$jsonData = '{';

		// $sqlString = "SELECT * FROM users" ;
		//$sqlString = "SELECT * FROM users WHERE user = 'johnwaynejose' AND password = 'philweb223'"; //fetch compared database
		$sqlString = "SELECT * FROM users WHERE user = '$userName' AND password = '$passWord'"; //fetch compared database
		$query = mysql_query($sqlString) or die (mysql_error()); 
		
			
		$row = mysql_fetch_array($query);
			

			if($row["user"]!=""){
		    	$id = $row["id"]; 
		    	$user = $row["user"];
				$password  = $row["password"];
				$status = true;
				$message = "Successfully Login";


			}else{
				$result_status = "false";
				$id = "none"; 
		    	$user = "none";
				$password  = "none";
				$status = $result_status;
				$message = "Username '".$userName."' and Password '".$passWord."' is incorrect.";
				
			}

			$jsonData .= '"User":{ "id":"'.$id.'","user":"'.$user.'", "password":"'.$password.'" , "status":"'.$status.'" , "message":"'.$message.'" }';
		
		// $jsonData .= '"arbitrary":{"itemcount":'.$i.', "returntime":"'.$timestamp.'"}';

		$jsonData .= '}';

		// if($jsonData==null && $jsonData=="" && $jsonData=="No Properties"){
		// 	$message="NO Property Selected On Database";
		// 	echo "<script type='text/javascript'>alert('$message');</script>";
		// }else{
		// 	echo $jsonData;
		// }

		echo $jsonData;

	// }

?>