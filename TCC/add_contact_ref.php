<?php

	//from Local
	
	header("Content-Type: application/json");

	//BELOW CODE ARE PROVEN AND TESTED THAT RESULT WILL SHOW AND THE ITEM'S WILL BE IN JSON FORMAT
	// header('content-type: application/json; charset=utf-8');
	// header("access-control-allow-origin: *");

	$token_key = "";
	$con_firstname = "";
    $con_lastname = "";
    $con_email = "";
    $acct_numb = "";
    $cont_ref = "";

	if (isset($_REQUEST['action']) ) {
		$token_key = isset($_REQUEST['tokenKey']) ? $_REQUEST['tokenKey'] : null;
		$con_firstname = isset($_REQUEST['con_firstname']) ? $_REQUEST['con_firstname'] : null;
		$con_lastname = isset($_REQUEST['con_lastname']) ? $_REQUEST['con_lastname'] : null;
		$con_email = isset($_REQUEST['con_email']) ? $_REQUEST['con_email'] : null;
		$acct_numb = isset($_REQUEST['acct_numb']) ? $_REQUEST['acct_numb'] : null;
		$cont_ref = isset($_REQUEST['cont_ref']) ? $_REQUEST['cont_ref'] : null;
		
	}

	// var_dump('value = '.$token_key.'<br/>'.$buyCurrency.'<br/>'.$sellCurrency.'<br/>'.$amount.'<br/>'.$side.'<br/>'.$termAgreement.'<br/>'.$reason);
		
	$qstring = array(
		'first_name'=> $con_firstname,
		'last_name'=> $con_lastname,
		'email_address'=>$con_email,
		'account_id'=>$acct_numb,
		'your_contact_ref'=>$cont_ref
	);
	
	 //cURL settings
    $curlOptions = array (
        CURLOPT_URL => "https://uat1.xbpconnect.com/api/en/v1.0/".$token_key."/contact/create",
        // CURLOPT_URL => "https://uat1.xbpconnect.com/api/en/v1.0/".$token_key."/contact/create",
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
	$addContact = curl_exec($ch);

	curl_close($ch);

	// $responseArray = array();
	// parse_str($response,$responseArray);
	
	echo $addContact;

?>