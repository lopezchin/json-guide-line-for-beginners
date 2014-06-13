<?php

	//from Local
	
	header("Content-Type: application/json");

	//BELOW CODE ARE PROVEN AND TESTED THAT RESULT WILL SHOW AND THE ITEM'S WILL BE IN JSON FORMAT
	// header('content-type: application/json; charset=utf-8');
	// header("access-control-allow-origin: *");

	$n_name = '';
	$account_ccy = '';
	$beneficiary_name = '';
	$bank_name = '';
	$bank_address = '';
	$account_number = '';
	$sort_code = '';
	$destination_code = '';
	$beneficiary = '';
	$source = '';

	if (isset($_REQUEST['action']) ) {

		$token_key = isset($_REQUEST['tokenKey']) ? $_REQUEST['tokenKey'] : null;
		$n_name = isset($_REQUEST['n_name']) ? $_REQUEST['n_name'] : null;
		$account_ccy = isset($_REQUEST['account_ccy']) ? $_REQUEST['account_ccy'] : null;
		$beneficiary_name = isset($_REQUEST['beneficiary_name']) ? $_REQUEST['beneficiary_name'] : null;
		$bank_name = isset($_REQUEST['bank_name']) ? $_REQUEST['bank_name'] : null;
		$bank_address = isset($_REQUEST['bank_address']) ? $_REQUEST['bank_address'] : null;
		$account_number = isset($_REQUEST['account_number']) ? $_REQUEST['account_number'] : null;
		$sort_code = isset($_REQUEST['sort_code']) ? $_REQUEST['sort_code'] : null;
		$destination_code = isset($_REQUEST['destination_code']) ? $_REQUEST['destination_code'] : null;
		$beneficiary = isset($_REQUEST['beneficiary']) ? $_REQUEST['beneficiary'] : null;
		$source = isset($_REQUEST['source']) ? $_REQUEST['source'] : null;
		
	}

	// var_dump('value = '.$token_key.'<br/>'.$n_name.'<br/>'.$account_ccy.'<br/>'.$beneficiary_name.'<br/>'.$bank_name.'<br/>'.$bank_address.'<br/>'.$source);

	$qstring = array(
	    'nickname' => $n_name,
		'acct_ccy' => $account_ccy,
		'beneficiary_name' => $beneficiary_name,
		'bank_name' => $bank_name,
		'bank_address' => $bank_address,
		'acct_number' => $account_number,
		'sort_code' => $sort_code,
		'destination_country_code' => $destination_code,
		'is_beneficiary' => $beneficiary,
		'is_source' => $source
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