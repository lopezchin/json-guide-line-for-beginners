<?php
	
	$trade_id = '';
	$currency = '';
	$amount = '';
	$beneficiary_id = '';
	$reason = '';
	$payment_reference= '';
	// $payment_type = "";
 //    $payer_type = "";
 //    $payer_company_name = "";
 //    $payer_address = "";
 //    $payer_city = "";
 //    $payer_country = "";
	
	if (isset($_REQUEST['action']) ) {

		$token_key = isset($_REQUEST['tokenKey']) ? $_REQUEST['tokenKey'] : null;
		$trade_id = isset($_REQUEST['trade_id']) ? $_REQUEST['trade_id'] : null;
		$currency = isset($_REQUEST['currency']) ? $_REQUEST['currency'] : null;
		$amount = isset($_REQUEST['payment_amount']) ? $_REQUEST['payment_amount'] : null;
		$beneficiary_id = isset($_REQUEST['beneficiary_id']) ? $_REQUEST['beneficiary_id'] : null;
		$reason = isset($_REQUEST['reason']) ? $_REQUEST['reason'] : null;
		$payment_reference = isset($_REQUEST['payment_reference']) ? $_REQUEST['payment_reference'] : null;
		// $payment_type = isset($_REQUEST['payment_type']) ? $_REQUEST['payment_type'] : null;
		// $payer_type = isset($_REQUEST['payer_type']) ? $_REQUEST['payer_type'] : null;
		// $payer_company_name = isset($_REQUEST['payer_company_name']) ? $_REQUEST['payer_company_name'] : null;
		// $payer_address = isset($_REQUEST['payer_address']) ? $_REQUEST['payer_address'] : null;
		// $payer_city = isset($_REQUEST['payer_city']) ? $_REQUEST['payer_city'] : null;
		// $payer_country = isset($_REQUEST['payer_country']) ? $_REQUEST['payer_country'] : null;
		
	};

	$qstring = array(
	    'trade_id' => $trade_id,
	    'currency' => $currency,
	    'amount' => $amount,
	    'beneficiary_id' => $beneficiary_id,
	    'reason' => $reason,
	    'payment_reference' => $payment_reference
	    // 'payment_type' => $payment_type,
	    // 'payer_type' => $payer_type,
	    // 'payer_company_name' => $payer_company_name,
	    // 'payer_address' => $payer_address,
	    // 'payer_city' => $payer_city,
	    // 'payer_country' => $payer_country,
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
