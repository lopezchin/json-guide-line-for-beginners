<?php

// all transaction
 
$apiLogin = '8swOjWN7iUOAozk0w0tj9gvMBY8';
$apiSecret = 'v284VsNfRilR8LP4zeyqlYn6cnG69WeJZUi4Jit3u7JXtMvtkkxOlI6rep4NGwTA';

// $apiLogin = 'EMEvbbib9rlMhq2EDOJawI73dnk';
// $apiSecret = 'Z5f98Julb4ZFxC1j1djy4NND1UcQZKt9Xb3hbZHF72gtfhTu35a2IjEiCOPSCx1L';

// $paymentToken = 'GSvXKeyVEd1eCkyVnA2H6D44FBV'; 
// $url = 'https://core.spreedly.com/v1/payment_methods/'.$paymentToken.'.xml';
$url = 'https://core.spreedly.com/v1/transactions.xml';
//'https://spreedlycore.com/v1/payment_methods/' . $paymentToken . '/retain.xml';
 
//  Initiate curl
$ch = curl_init();
 curl_setopt($ch, CURLOPT_USERPWD, $apiLogin . ':' . $apiSecret);
// Disable SSL verification
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
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