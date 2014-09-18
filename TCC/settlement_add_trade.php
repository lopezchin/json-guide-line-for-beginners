<?php

	$settlement_id = '';
	$trade_id_settle = '';

	if (isset($_REQUEST['action']) ) {

		$token_key = isset($_REQUEST['tokenKey']) ? $_REQUEST['tokenKey'] : null;
		$settlement_id = isset($_REQUEST['settleID']) ? $_REQUEST['settleID'] : null;
		$trade_id_settle = isset($_REQUEST['tradeIDsettle']) ? $_REQUEST['tradeIDsettle'] : null;
		
	};

	$qstring = array(
	    'trade_id' => $trade_id_settle,
	);

	 //cURL settings
    $curlOptions = array (
    	//https://api.thecurrencycloud.com for live API 
        CURLOPT_URL => "https://devapi.thecurrencycloud.com/api/en/v1.0/".$token_key."/settlement/".$settlement_id."/add_trade",
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
	$settlement_add_trade = curl_exec($ch);

	curl_close($ch);

	// $responseArray = array();
	// parse_str($response,$responseArray);
	
	echo $settlement_add_trade;

	// sending email
	
	// $to      = 'philweb.seniorprogrammer05@gmail.com';
	// $subject = 'Settlement ID';
	// $message = 	$settlement;
	// $headers = 'From: '.$to.
	//     'Reply-To: admin@gmail.com'. "\r\n" .
	//     'X-Mailer: PHP/' . phpversion();

	// mail($to, $subject, $message, $headers);


?>
