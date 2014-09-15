<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

session_start();

$data = array();

if(isset($_REQUEST['action'])){
	
	$data['status'] = 'logout';
	$data['redirect'] = '/update2';

	echo json_encode($data);

	session_destroy();	
	
}else if(isset($_SESSION)){
	session_destroy();
	$data['status'] = 'success';
	$data['redirect'] = '/update2';

	echo json_encode($data);

	header("Location: ".$data['redirect']);

}else{
	$data['status'] = 'success';
	$data['redirect'] = 'dashboard.html';
	echo json_encode($data);

	header("Location: ".$data['redirect']);

}

// unset($_SESSION['token_id']);
// unset($_SESSION['email']);

?>