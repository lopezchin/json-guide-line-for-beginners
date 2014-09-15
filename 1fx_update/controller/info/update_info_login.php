<?php

	
  	require_once($_SERVER['DOCUMENT_ROOT'].'/controller/shared/config.php');

	extract($_POST);	

	$queryUpdate = "UPDATE  users SET  fullname =  '$fullname', address =  '$address', company =  '$company', avatar = REPLACE('$avatar_icon', 'C:fakepath', '') WHERE  email = '$email_hidden'"; // workable

	$result = mysql_query($queryUpdate);

	//mysql_affected_rows() for update query
	//mysql_num_rows(result) for inserting and selecting query

	if(mysql_affected_rows()) {

		$ret = array(
			'status' => 'success',
			'message' => 'Profile successfully updated!'
		);

		echo json_encode($ret);

		exit();

	}else{

		$ret = array(
			'status' => 'error',
			'message' => 'No field update!'
		);

		echo json_encode($ret);

		exit();
	}
	
?>