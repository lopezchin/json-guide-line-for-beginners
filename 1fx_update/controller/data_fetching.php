<?php

	require_once($_SERVER['DOCUMENT_ROOT'].'/controller/shared/config.php');	
		
	$data = array();

	if (isset($_POST) ) {
		
		extract($_POST);

		$logPass = md5($password);

		// var_dump($logPass);

		$sqlString = "SELECT * FROM users WHERE email = '$login_email' AND password = '$logPass'";

		$result = mysql_query($sqlString);

		if(mysql_affected_rows()){
			$data['status'] = 'success';
			$data['email'] = $login_email;
			$data['redirect'] = '/update2';
		}
		else{
			$data['status'] = 'failed';
			$data['message'] = 'Invalid credential';
		}
	}

	echo json_encode($data);

?>