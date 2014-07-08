<?php

// for single transaction
 	
$paymentToken = '';

if (isset($_REQUEST['action']) ) {
	$payment_token = isset($_REQUEST['SinglePaymentToken']) ? $_REQUEST['SinglePaymentToken'] : null;
};

$apiLogin = '8swOjWN7iUOAozk0w0tj9gvMBY8';
$apiSecret = 'wSC5Xo2cyeyPCbLQgcR9U9eGyq2J1VG5Ig4uKhBiLd17dAfTcd4YLwIEE4q7DK8m';

$paymentToken = $payment_token; 

$url = 'https://core.spreedly.com/v1/payment_methods/'.$paymentToken.'.xml';
// $url = 'https://core.spreedly.com/v1/transactions.xml';
//'https://spreedlycore.com/v1/payment_methods/' . $paymentToken . '/retain.xml';
 
//  Initiate curl_close(ch)
$ch = curl_init();
 curl_setopt($ch, CURLOPT_USERPWD, $apiLogin . ':' . $apiSecret);
// Disable SSL verification
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
// Will return the response, if false it print the response
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// Set the url
curl_setopt($ch, CURLOPT_URL,$url);
// Execute
$xmlstr=curl_exec($ch);
// Closing
curl_close($ch);

$xml = trim($xmlstr);

print_r($xml);

?>