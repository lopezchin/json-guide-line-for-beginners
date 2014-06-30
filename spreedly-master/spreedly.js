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
	        </credit_card> \
	    </payment_method>'
	);
 
};


Spreedly.process = function(process) {
	
	process.firstName = Spreedly.escapeXml(process.firstName);
	process.lastName = Spreedly.escapeXml(process.lastName);
	process.number = ('' + process.number).replace(/\D/g, '');
	
	var url = 'https://core.spreedly.com/v1/payment_methods.xml?environment_key=' + process.environmentKey;
	var xhr = Spreedly.createCORSRequest('POST', url);
	
	xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhr.setRequestHeader('Content-Type', 'application/xml');
	
	xhr.onload = function() {
	  var text = xhr.responseText;
	  var token = $(text).find("payment_method").find("token").text();
	  process.callback(token);
	};
	
	xhr.onerror = process.error || function() {
	  alert('There was an error making the request.');
	};
	
	xhr.send(
	    '<payment_method> \
	        <credit_card> \
	            <first_name>' + process.firstName + '</first_name> \
	            <last_name>' + process.lastName + '</last_name> \
	            <number>' + process.number + '</number> \
	            <month>' + process.month + '</month> \
	            <year>' + process.year + '</year> \
	        </credit_card> \
	    </payment_method>'
	);
 
};
