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
				document.getElementById('gateway_token').value = gateway_token;;
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
	// var url = "https://core.spreedly.com/v1/payment_methods.json?environment_key=8swOjWN7iUOAozk0w0tj9gvMBY8";
	var url = "https://core.spreedly.com/v1/payment_methods.json?environment_key=EMEvbbib9rlMhq2EDOJawI73dnk";

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


// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 


$("#process_payment").click(function () {
    var gateway_token = $("#gateway_token").val();
    var process_token_request = $("#process_token_request").val();
    var process_amount = $("#process_amount").val();
    var currency_code = $("#currency_code").val();

     //alert(firstName+'\n\n'+lastName+'\n\n'+cardNumber+'\n\n'+month+'\n\n'+year+'\n\n'+cvv+'\n\n'+ address_1+'\n\n'+address_2+'\n\n'+city+'\n\n'+state+'\n\n'+zip+'\n\n'+country+'\n\n'+phone_number);
   
   	 process_payment(gateway_token,process_token_request, process_amount, currency_code);

});

function process_payment(gateway_token, process_token_request, process_amount, currency_code){
	alert(gateway_token+'\n\n'+process_token_request+'\n\n'+process_amount+'\n\n'+currency_code);
	
	// var msg="";

    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: 'https://core.spreedly.com/v1/gateways/'+gateway_token+'/purchase.xml',
      data: {
    	'gateway_token':  gateway_token,
    	'payment_method_token':  process_token_request,
		'process_amount': process_amount,
		'currency_code': currency_code,
        _token: "",
        action: 'processPayment'
      },

      success: function(process_payment) {

       console.log(process_payment);

        // document.getElementById("response").innerHTML = data.message;
      }
      
    });   

    // var transaction =   "<transaction> \
	// 				        <payment_method_token>"+process_token_request+"</payment_method_token> \
	// 				        <amount>"+process_amount+"</amount>\
	// 				        <currency_code>"+currency_code+"</currency_code>\
	// 				    </transaction>"
	// var transaction = {
	// 	"transaction": {
	// 		"payment_method_token":  process_token_request,
	// 		"process_amount": process_amount,
	// 		"currency_code": currency_code
	// 	}
	// }

	// var url = "https://core.spreedly.com/v1/gateways/CUK6uXH1GiQnxV2kW6apTPbJoi/purchase.xml";
	// // var url = "https://core.spreedly.com/v1/payment_methods.json?environment_key=8swOjWN7iUOAozk0w0tj9gvMBY8";
	// console.log(transaction);

	// ajax_request(transaction, url);

	// $.ajax({
	// 	  type: "POST",
	// 	  url: url,
	// 	  dataType: "json",
	// 	  data: transaction
	// }).success(function(data) {
	//   	console.log(data);
	  
	// }).error(function(request, status, error) {
	//   	console.log(error);
	//   	// alert('error');
	// });
}
 
// var ajax_request = function(data, url){
// 	var xhr = createCORSRequest('GET', url);
// 	if (!xhr) {
// 	  throw new Error('CORS not supported');
// 	}
// 	$.ajax({
// 		type: "POST",
// 		url: url,
// 		dataType: "xml",
// 		data: data,
// 		beforeSend: function(result){
// 			console.log("before");
// 			console.log(result);
// 		},
// 		success: function(result){
// 			console.log("success");
// 			console.log(result);
// 		},
// 		complete: function(result){
// 			console.log("after");
// 			console.log(result);
// 		},
// 		error: function(xhr){
// 			alert(xhr.responseText);
// 		}
// 	});
// }

// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {

//     // Check if the XMLHttpRequest object has a "withCredentials" property.
//     // "withCredentials" only exists on XMLHTTPRequest2 objects.
//     xhr.open(method, url, true);

//   } else if (typeof XDomainRequest != "undefined") {

//     // Otherwise, check if XDomainRequest.
//     // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
//     xhr = new XDomainRequest();
//     xhr.open(method, url);

//   } else {

//     // Otherwise, CORS is not supported by the browser.
//     xhr = null;

//   }
//   return xhr;
// }