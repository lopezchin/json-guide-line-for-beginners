<?php

// for single transaction
 	
// $paymentToken = '';

// if (isset($_REQUEST['action']) ) {
// 	$payment_token = isset($_REQUEST['SinglePaymentToken']) ? $_REQUEST['SinglePaymentToken'] : null;
// };

$apiLogin = '8swOjWN7iUOAozk0w0tj9gvMBY8';
$apiSecret = 'v284VsNfRilR8LP4zeyqlYn6cnG69WeJZUi4Jit3u7JXtMvtkkxOlI6rep4NGwTA';

// $apiLogin = 'EMEvbbib9rlMhq2EDOJawI73dnk';
// $apiSecret = 'Z5f98Julb4ZFxC1j1djy4NND1UcQZKt9Xb3hbZHF72gtfhTu35a2IjEiCOPSCx1L';


$qstring = array(
    'gateway_type'=> 'test'
);
$url = 'https://core.spreedly.com/v1/gateways.xml';
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
$gatewaystr=curl_exec($ch);
// Closing
curl_close($ch);

$gateway = trim($gatewaystr);

print_r($gateway);

?>