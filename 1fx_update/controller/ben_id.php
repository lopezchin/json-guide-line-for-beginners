<?php

	
  	require_once($_SERVER['DOCUMENT_ROOT'].'/controller/shared/config.php');	

	$eMail = "";
	$beneficiary_id = "";

	if (isset($_REQUEST['action']) ) {

		$eMail = isset($_REQUEST['email']) ? $_REQUEST['email'] : null;
		$beneficiary_id = isset($_REQUEST['beneficiary_id']) ? $_REQUEST['beneficiary_id'] : null;
		
	}

	$query = "UPDATE users SET beneficiary_id = '$beneficiary_id' WHERE  email = '$eMail'"; // workable
 
	mysql_query($query);
		
	$ret = array(
		'status' => "success",
		'beneficiary_id'=> $beneficiary_id,
		'email'=> $eMail,
		'redirect' => 'beneficiary.html',
		'message' => "Beneficiary successfully saved."
	);

	echo json_encode($ret);

	exit();
	
?>