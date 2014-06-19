<?php

	//from Local

	header("Content-Type: application/json");
	
	//BELOW CODE ARE PROVEN AND TESTED THAT RESULT WILL SHOW AND THE ITEM'S WILL BE IN JSON FORMAT
	// header('content-type: application/json; charset=utf-8');
	// header("access-control-allow-origin: *");

	// if(isset($_POST['limit'])){
	// 	$limit = preg_replace('#[^0-9]#', '', $_POST['limit']);
		// if (isset($_GET['action']) ) {

		// 	// var_dump('yes' . " - " . $_POST['username']);

		// 	$userName = isset($_GET['username']) ? $_GET['username'] : null;
		// 	$passWord = isset($_GET['password']) ? $_GET['password'] : null;

		// }else if (isset($_POST['action']) ){

		// 	$userName = isset($_POST['username']) ? $_POST['username'] : null;
		// 	$passWord = isset($_POST['password']) ? $_POST['password'] : null;

		// }
		
		// database connection
		$host = "localhost";
		$user = "root";
		$password = "";
		$database = "wwwphilw_1fx";

		$con = mysql_connect($host, $user, $password) or die("Could not connect: ". mysql_error());
		
		mysql_select_db($database) or die("Could not connect to database: ". mysql_error());

		$i = 0;

		$sqlString = "SELECT * FROM contacts"; //fetch compared database
		
		//inserting data // INSERT INTO `wwwphilw_1fx`.`contacts` (`id`, `fullname`, `address`, `email`, `phone_number`) VALUES (NULL, 'John Wayne Jose', 'New Jersey', 'philweb.seniorprogrammer05@gmail.com', '222 222-2222');

		//delete // DELETE FROM `wwwphilw_1fx`.`contacts` WHERE `contacts`.`id` = 4 LIMIT 1;

		$query = mysql_query($sqlString) or die (mysql_error()); 
		if($query!=null){
			
			while ($row = mysql_fetch_array($query)) {
				$i++;

				$ret = array(					
					// 'status' => 'success',
			    	'id' => $row["id"],
			    	'fullname'=> $row["fullname"],
					'email'  => $row["email"],
					'address'  => $row["address"],
					'phone_number'  => $row["phone_number"],
					'status' => true,
					'redirect' => 'http://localhost',
					'message' => "Credential is correct."
				);

				echo json_encode($ret);
				
			}

			exit();
		}

		$ret = array(
			'status' => 'error',
			'message' => "Error fetching data"
		);
		

		echo json_encode($ret);
		
		exit();

?>