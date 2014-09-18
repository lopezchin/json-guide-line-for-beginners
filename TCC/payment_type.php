<?php

	$cyy = '';
	$destination_country_code = '';
	$pay_type = '';
	
	if (isset($_REQUEST['action']) ) {

		$token_key = isset($_REQUEST['tokenKey']) ? $_REQUEST['tokenKey'] : null;
		$ccy = isset($_REQUEST['ccy']) ? $_REQUEST['ccy'] : null;
		$pay_type = isset($_REQUEST['pay_type']) ? $_REQUEST['pay_type'] : null;
		$destination_country_code = isset($_REQUEST['destination_country_code']) ? $_REQUEST['destination_country_code'] : null;
		
	};

	$qstring = array(
	    'ccy' => $ccy,
	    'destination_country_code' => $destination_country_code,
	    'payment_type' => $pay_type,
	);

	 //cURL settings
    $curlOptions = array (
        CURLOPT_URL => "https://devapi.thecurrencycloud.com/api/en/v1.0/".$token_key."/beneficiaries/required_fields",
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
	$payment_type = curl_exec($ch);

	curl_close($ch);

	// $responseArray = array();
	// parse_str($response,$responseArray);
	
	echo $payment_type;

?>
