<?php
	
	$trade_id = '';
	
	if (isset($_REQUEST['action']) ) {

		$token_key = isset($_REQUEST['tokenKey']) ? $_REQUEST['tokenKey'] : null;
		$trade_id = isset($_REQUEST['tradeID']) ? $_REQUEST['tradeID'] : null;
		
	};

	$qstring = array(
	    
	);

	 //cURL settings
    $curlOptions = array (
        // CURLOPT_URL => "https://devapi.thecurrencycloud.com/api/en/v1.0/".$token_key."/settlement/create",
        CURLOPT_URL => "https://devapi.thecurrencycloud.com/api/en/v1.0/".$token_key."/trade/".$trade_id."/confirm/resend",
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
	$TradeconfirmResend = curl_exec($ch);

	curl_close($ch);

	// $responseArray = array();
	// parse_str($response,$responseArray);
	
	echo $TradeconfirmResend;

	// sending email
	
	// $to      = 'philweb.seniorprogrammer05@gmail.com';
	// $subject = 'Settlement ID';
	// $message = 	$settlement;
	// $headers = 'From: '.$to.
	//     'Reply-To: admin@gmail.com'. "\r\n" .
	//     'X-Mailer: PHP/' . phpversion();

	// mail($to, $subject, $message, $headers);


?>
