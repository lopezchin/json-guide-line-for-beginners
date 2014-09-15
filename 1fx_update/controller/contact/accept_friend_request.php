<?php

	require_once($_SERVER['DOCUMENT_ROOT'].'/controller/shared/config.php');

	extract($_POST);

	// email to be added
	
	//current email logged in
	$queryCurrentEmail = "SELECT * FROM users WHERE email = '$current_email'";
	$CurrentEmailQuery = mysql_query($queryCurrentEmail) or die (mysql_error()); 
 	$CurrentEmailRow = mysql_fetch_array($CurrentEmailQuery);
	$currentEmail = $CurrentEmailRow['id'];

	// var_dump($add_email . " - " . $currentEmail);

	//checking if its available
	$check_query = "SELECT * FROM contacts WHERE user_id = '$currentEmail' AND contact_id = '$add_email'";

	$result = mysql_query($check_query);

	if(mysql_num_rows($result) >= 1){

		$ret = array(
			'status' => 'exist_bind',
			'message' => 'Your already friend with '.$add_email,
			'redirect' => 'user-list.html'
		);

		echo json_encode($ret);

		exit();

	}else{

		$query = "INSERT INTO contacts(user_id, contact_id, status) VALUES('$currentEmail', '$add_email', 'friend')";

		$update_query = "UPDATE  contacts SET status = 'friend' WHERE  user_id = '$add_email'"; 

		mysql_query($query);

		mysql_query($update_query);
		
		$ret = array(
			'status' => 'success',
			'message' => 'Successfully Added!'
		);

		echo json_encode($ret);

		exit();
	}