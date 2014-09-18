<?php

	//from Local

	header("Content-Type: application/json");
	
	//BELOW CODE ARE PROVEN AND TESTED THAT RESULT WILL SHOW AND THE ITEM'S WILL BE IN A JSON FORMAT
	// header('content-type: application/json; charset=utf-8');
	// header("access-control-allow-origin: *");

	// if(isset($_POST['limit'])){
	// 	$limit = preg_replace('#[^0-9]#', '', $_POST['limit']);
		if (isset($_REQUEST['action']) ) {

			// var_dump('yes' . " - " . $_POST['username']);

			$userName = isset($_REQUEST['username']) ? $_REQUEST['username'] : null;
			$passWord = isset($_REQUEST['password']) ? $_REQUEST['password'] : null;

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
		$sqlString = "SELECT * FROM users WHERE user = '$userName' AND password = '$passWord'"; //fetch compared database
		$query = mysql_query($sqlString) or die (mysql_error()); 
		if($query!=null){
			
			while ($row = mysql_fetch_array($query)) {
				$i++;

				$ret = array(					
					// 'status' => 'success',
			    	'id' => $row["id"],
			    	'user'=> $row["user"],
					'password'  => $row["password"],
					'status' => true,
					'redirect' => 'http://localhost/JSON_beginner/json_tut6_fetching.html',
					'message' => "Credential is correct."
				);


				echo json_encode($ret);
				exit();
			}
		}

		$ret = array(
			'status' => 'error',
			'message' => "Password <".$passWord."> and username <".$userName."> is incorrect."
		);
		

		echo json_encode($ret);
		
		exit();

?>