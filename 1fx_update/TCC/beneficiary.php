<?php

	//from Local
	
	header("Content-Type: application/json");
  	header("Access-Control-Allow-Origin: *");

	// header('content-type: application/json; charset=utf-8');
	// header("access-control-allow-origin: *");

	extract($_POST);

	// var_dump('value = '.$token_key.'<br/>'.$n_name.'<br/>'.$account_ccy.'<br/>'.$beneficiary_name.'<br/>'.$bank_name.'<br/>'.$bank_address.'<br/>'.$source);

	$qstring = array(
	    'nickname' => $nickname,
		'acct_ccy' => $account_ccy,
		'beneficiary_name' => $beneficiary_name,
		'bank_name' => $bank_name,
		'bank_address' => $bank_address,
		'acct_number' => $account_number,
		'sort_code' => $sort_code,
		'destination_country_code' => $destination_code,
		'is_beneficiary' => 'true',
		'is_source' => 'false'
	);

	 //cURL settings
    $curlOptions = array (
        // CURLOPT_URL => "https://devapi.thecurrencycloud.com/api/en/v1.0/".$token."/trade/execute",
        CURLOPT_URL => "https://devapi.thecurrencycloud.com/api/en/v1.0/".$token_key."/beneficiary/new",
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
	$beneficiary_new = curl_exec($ch);

	curl_close($ch);

	// $responseArray = array();
	// parse_str($response,$responseArray);
	
	echo $beneficiary_new;
?>