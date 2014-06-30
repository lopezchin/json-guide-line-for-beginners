<?php

	//from dev server

	header("Content-Type: application/json");


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
	// if(isset($_POST['limit'])){
		// $limit = preg_replace('#[^0-9]#', '', 2);
		
		$host = "localhost";
		$user = "root";
		$password = "";
		$database = "wwwphilw_1fx";

		$con = mysql_connect($host, $user, $password) or die("Could not connect: ". mysql_error());
		
		mysql_select_db($database) or die("Could not connect to database: ". mysql_error());

		$i = 0;
		$jsonData = '{';

			$sqlString = "SELECT * FROM users" ;
			$query = mysql_query($sqlString) or die (mysql_error()); 
			while ($row = mysql_fetch_array($query)) {
				$i++;
		    	$id = $row["id"]; 
		    	$user = $row["user"];
				$password  = $row["password"];
				$status = true;
				$jsonData .= '"User'.$i.'":{ "id":"'.$id.'","user":"'.$user.'", "password":"'.$password.'" },';
			}


		$jsonData = chop($jsonData, ",");
		// $jsonData .= '"arbitrary":{"itemcount":'.$i.', "returntime":"'.$timestamp.'"}';

		$jsonData .= '}';

		echo $jsonData;
	// }

?>