var Spreedly = Spreedly || {};

Spreedly.escapeXml = function(str) {
    return str
    	.replace(/&/g, '&amp;')
    	.replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
};

Spreedly.createCORSRequest = function(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
};

Spreedly.tokenize = function(opt) {

	
	opt.firstName = Spreedly.escapeXml(opt.firstName);
	opt.lastName = Spreedly.escapeXml(opt.lastName);
	opt.number = ('' + opt.number).replace(/\D/g, '');
	
	var url = 'https://core.spreedly.com/v1/payment_methods.xml?environment_key=' + opt.environmentKey;
	var xhr = Spreedly.createCORSRequest('POST', url);
	
	xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhr.setRequestHeader('Content-Type', 'application/xml');
	
	xhr.onload = function() {
	  var text = xhr.responseText;
	  var token = $(text).find("payment_method").find("token").text();
	  opt.callback(token);
	};
	
	xhr.onerror = opt.error || function() {
	  alert('There was an error making the request.');
	};
	
	xhr.send(
	    '<payment_method> \
	        <credit_card> \
	            <first_name>' + opt.firstName + '</first_name> \
	            <last_name>' + opt.lastName + '</last_name> \
	            <number>' + opt.number + '</number> \
	            <month>' + opt.month + '</month> \
	            <year>' + opt.year + '</year> \
	            <address1>'+opt.address_1+'</address1> \
	            <address2>'+opt.address_2+'</address2> \
	            <city>'+opt.city+'</city> \
	            <state>'+opt.state+'</state> \
	            <zip>'+opt.zip+'</zip> \
	            <country>'+opt.country+'</country> \
	            <phone_number>'+opt.phone_number+'</phone_number> \
	        </credit_card> \
	        <email>'+opt.email+'</email> \
	    </payment_method>'
	);
};


// Spreedly.process = function(process) {
	
// 	process.processToken = Spreedly.escapeXml(process.processToken);
// 	process.processAmount = Spreedly.escapeXml(process.processAmount);
// 	process.currencyCode = Spreedly.escapeXml(process.currencyCode);
	
// 	// var url = 'https://core.spreedly.com/v1/payment_methods.xml?environment_key=' + process.environmentKey;
// 	// var url = 'https://core.spreedly.com/v1/gateways/'+process.processToken+'/purchase.xml?environment_key=' + process.environmentKey;
// 	var url = 'https://core.spreedly.com/v1/gateways/CUK6uXH1GiQnxV2kW6apTPbJoi/purchase.xml';
// 	var xhr = Spreedly.createCORSRequest('POST', url);
	
// 	xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
// 	xhr.setRequestHeader('Content-Type', 'application/xml');
	
// 	xhr.onload = function() {
// 	  var text = xhr.responseText;
// 	  var process_token = $(text).find("transaction").find("payment_method_token").text();
// 	  process.callback(process_token);
// 	};
	
// 	xhr.onerror = process.error || function() {
// 	  alert('There was an error making the request.');
// 	};
	
// 	xhr.send(
// 	    '<transaction> \
// 	        <payment_method_token>'+process.processToken+'</payment_method_token> \
// 	        <amount>'+process.processAmount+'</amount> \
// 	        <currency_code>'+process.currencyCode+'</currency_code> \
// 	    </transaction>'
// 	);
 
// };
