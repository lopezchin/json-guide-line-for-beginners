<?php
	$data = array();


	session_start();


	if(!isset($_SESSION['token_id'])){ //check session first if its set 
		
		// if(isset($_REQUEST['loginSbt'])) {
		
		// 	$email = isset($_REQUEST['email']) ? $_REQUEST['email'] : null;
		// 	$password = isset($_REQUEST['password']) ? $_REQUEST['password'] : null;


		// 	if($email == "admin@gmail.com" && $password == "admin223"){
				// echo "correct credentials";
				$qstring = array(
			    'login_id' => 'philweb.seniorprogrammer05@gmail.com',
			    'api_key' => '4107a1cf7fba52e49d3257f24693078d4c10f13cf7ff1c2e74417b67fd63b103'
				);
				 //cURL settings
			    $curlOptions = array (
			        CURLOPT_URL => "https://devapi.thecurrencycloud.com/api/en/v1.0/authentication/token/new",
			        CURLOPT_VERBOSE => 1,
			        CURLOPT_RETURNTRANSFER => 1,
			        CURLOPT_POST => 1,
			        CURLOPT_POSTFIELDS => $qstring
			    );

				$ch = curl_init();
				curl_setopt_array($ch,$curlOptions);
				curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); 
			    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE); 


				//Sending our request - $response will hold the API response
				$response = curl_exec($ch);

				curl_close($ch);

				// $responseArray = array();
				// parse_str($response,$responseArray);
				
				echo $response;

				$obj = json_decode($response,true);

				$_SESSION['token_id'] = $obj['data'];
				setcookie('token_id',$obj['data']);

				// echo 'Token_key : '.$_SESSION['token_id'];

				header('Location: trade.html');

		// 	}else{
		// 		echo 'Incorrect username/password';
		// 		var_dump($_POST);
		// 	}

		// }else{ 
		// 	//logout message
		// 	echo json_encode(array('token_id' => 'please logout!'));
		// 	// header('Location: login.html');

		// 	// echo "please logout to generate new session token";
		// }
	}else { 
		//session set so show sesssion using json_encode
		echo json_encode(array('token_id' => $_SESSION['token_id']));
	}


?>
