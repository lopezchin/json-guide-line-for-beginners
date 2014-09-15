<?php

	require_once($_SERVER['DOCUMENT_ROOT'].'/controller/shared/config.php');	

	$data = array();

	if (isset($_POST) ) {
		
		extract($_POST);

		$password = md5($password);

		$date_created = date("Y:m:d");

		$query = "INSERT INTO users(fullname, password, email, company, address, date_created)
							 VALUES('$fullname','$password', '$email', '$companyname', '$address', '$date_created')";

		$result = mysql_query($query);

		if(mysql_affected_rows()){
			$data['status'] = 'success';
			$data['redirect'] = '/update2';
		}
		else{
			$data['status'] = 'failed';
		}
	}

	echo json_encode($data);

?>