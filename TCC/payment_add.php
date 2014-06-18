<?php

	$trade_id = '';
	$currency = '';
	$amount = '';
	$beneficiary_id = '';
	$reason = '';
	$payment_reference= '';
	
	if (isset($_REQUEST['action']) ) {

		$token_key = isset($_REQUEST['tokenKey']) ? $_REQUEST['tokenKey'] : null;
		$trade_id = isset($_REQUEST['trade_id']) ? $_REQUEST['trade_id'] : null;
		$currency = isset($_REQUEST['currency']) ? $_REQUEST['currency'] : null;
		$amount = isset($_REQUEST['amount']) ? $_REQUEST['amount'] : null;
		$beneficiary_id = isset($_REQUEST['beneficiary_id']) ? $_REQUEST['beneficiary_id'] : null;
		$reason = isset($_REQUEST['reason']) ? $_REQUEST['reason'] : null;
		$payment_reference = isset($_REQUEST['payment_reference']) ? $_REQUEST['payment_reference'] : null;
		
	};

	$qstring = array(
	    'trade_id' => $trade_id,
	    'currency' => $currency,
	    'amount' => $amount,
	    'beneficiary_id' => $beneficiary_id,
	    'reason' => $reason,
	    'payment_reference' => $payment_reference
	);

	 //cURL settings
    $curlOptions = array (
        CURLOPT_URL => "https://devapi.thecurrencycloud.com/api/en/v1.0/".$token_key."/payment/add",
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
	$payment_add = curl_exec($ch);

	curl_close($ch);

	// $responseArray = array();
	// parse_str($response,$responseArray);
	
	echo $payment_add;

?>
