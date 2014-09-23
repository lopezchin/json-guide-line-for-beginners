// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 

$.ajax({
  	type: "GET",
	dataType: "xml",
	url: "http://localhost/JSON_beginner/spreedly-master/gateway_token.php",
	contentType: "application/json; charset=utf-8",
	success: function(gatewayToken) {

		$(gatewayToken).find('gateway').each(function () {
            var gateway_token = $(this).find('token').text();

            console.log(gateway_token);
            document.getElementById('gatewayToken').innerHTML = gateway_token;
				document.getElementById('gateway_token').value = gateway_token;
        });
	}
	
});

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 


$("#payment_method").click(function () {
    var firstName = $("#firstname").val();
    var lastName = $("#lastname").val();
    var cardNumber = $("#cardNumber").val();
    var month = $("#month").val();
    var year = $("#year").val();
    var cvv = $("#cvv_payment").val();
    var payment_method_identifier = $("#payment_method_identifier").val();
    var some_other_things = $("#some_other_things").val();
    //with billing 
    // var address_1 = $("#address_1").val();
    // var address_2 = $("#address_2").val();
    // var city = $("#city").val();
    // var state = $("#state").val();
    // var zip = $("#zip").val();
    // var country = $("#country").val();
    // var phone_number = $("#phone_number").val();
    var email = $("#email").val();

     // alert(firstName+'\n\n'+lastName+'\n\n'+cardNumber+'\n\n'+month+'\n\n'+year+'\n\n'+cvv+'\n\n'+ address_1+'\n\n'+address_2+'\n\n'+city+'\n\n'+state+'\n\n'+zip+'\n\n'+country+'\n\n'+phone_number);
   	payment_method(firstName, lastName, cardNumber, month, year, cvv, email, payment_method_identifier, some_other_things);

});


function payment_method(firstName, lastName, cardNumber, month, year, cvv, email, payment_method_identifier, some_other_things){
		alert(firstName+'\n\n'+lastName+'\n\n'+cardNumber+'\n\n'+cvv+'\n\n'+month+'\n\n'+year+'\n\n'+email+'\n\n'+payment_method_identifier+'\n\n'+some_other_things);

   var card = {
	  "payment_method":{
	    "credit_card":{
	      "first_name": firstName,
	      "last_name": lastName,
	      "number":cardNumber,
	      "verification_value":cvv,
	      "month":month,
	      "year":year,
	      "email": email
	    },
	    "data": {
	      "my_payment_method_identifier": payment_method_identifier,
	      "extra_stuff": {
	        "some_other_things": some_other_things
	      }
	    }
	  }
	} 
	var url = "https://core.spreedly.com/v1/payment_methods.json?environment_key=8swOjWN7iUOAozk0w0tj9gvMBY8";
	// var url = "https://core.spreedly.com/v1/payment_methods.json?environment_key=EMEvbbib9rlMhq2EDOJawI73dnk";

	$.ajax({
	  type: "POST",
	  url: url,
	  dataType: "json",
	  data: card
	}).success(function(data) {
	  console.log(data);
	  var token_result = data.transaction.payment_method.token;
		document.getElementById("process_token_request").value = token_result;
	}).error(function(request, status, error) {
	  console.log(error);
	  // alert('error');
	  document.getElementById("process_token_request").value = 'Unexpected error';
	});
	
};// payment_method function end


// process payment function = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  WORKING


$("#process_payment").click(function () {
    var gateway_token = $("#gateway_token").val();
    var process_token_request = $("#process_token_request").val();
    var process_amount = $("#process_amount").val();
    var currency_code = $("#currency_code").val();

	process_payment(gateway_token,process_token_request, process_amount, currency_code);

});

function process_payment(gateway_token, process_token_request, process_amount, currency_code){
	alert(gateway_token+'\n\n'+process_token_request+'\n\n'+process_amount+'\n\n'+currency_code);

	$.ajax({
      type: 'POST',
      url: 'make_purchase.php',
      dataType: 'xml',
      data: {
      	'gatewayToken': gateway_token,
      	'processToken': process_token_request,
      	'processAmount': process_amount,
      	'currencyCode': currency_code,
      	_token: '',
      	action: 'makePurchase'
      }
	}).success(function(dataPP) {
	  console.log(dataPP);
	  
	}).error(function(request, status, errorPP) {
	  console.log(errorPP);
	});

}
// process payment function = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  WORKING


$("#delete_payment").click(function () {
    var gateway_token = $("#gateway_token").val();
    var payment_token = $("#payment_token").val();

	delete_payment_token(gateway_token, payment_token);

});

function delete_payment_token(gateway_token, payment_token){
	alert(gateway_token+'\n\n'+payment_token);

	$.ajax({
      type: 'POST',
      url: 'delete_payment.php',
      dataType: 'xml',
      data: {
      	'gatewayToken': gateway_token,
      	'paymentToken': payment_token,
      	_token: '',
      	action: 'deletePayment'
      }
	}).success(function(dataDP) {
	  console.log(dataDP);
	  
	}).error(function(request, status, errorDP) {
	  console.log(errorDP);
	});

}