<?php

	$trade_id = '';

	if (isset($_REQUEST['action']) ) {

		$trade_id = isset($_REQUEST['tradeID']) ? $_REQUEST['tradeID'] : null;
		
	};

	$login_id = 'philweb.seniorprogrammer05@gmail.com';
	$api_key = '4107a1cf7fba52e49d3257f24693078d4c10f13cf7ff1c2e74417b67fd63b103';

	$URL = "https://clientdemo.thecurrencycloud.com/proxy/transactron/confirm_funds_sent?deal_ref=20140923-BYTPWK";
	 
	$ch = curl_init($URL);
	curl_setopt($ch, CURLOPT_USERPWD, $login_id . ':' . $api_key);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
	curl_setopt($ch, CURLOPT_POST, 1);

	$output = curl_exec($ch);
	curl_close($ch);

	echo($output);

?>
