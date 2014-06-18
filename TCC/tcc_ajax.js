  $.ajax({
      type: "POST",
      url: "http://localhost/JSON_beginner/TCC/authentication.php",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(token) {

      // console.log(res.data);
      var tokenKey = token.data;
      //result show on success respond
      document.getElementById('tokenID').innerHTML = tokenKey;
      document.getElementById('token').value = tokenKey;

    }
  });

  // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
  // Confirm Resend

  $("#tradeID").click(function () {
        
    var token_key = $("#token").val();
    var trade_id = $("#trade_id").val();

    // alert(token_key+'\n\n'+trade_id);

    confirmResend(token_key, trade_id);

  });

  function confirmResend(token_key, trade_id){
    $.ajax({
        type: "POST",
        // url: "http://localhost/JSON_beginner/TCC/settlement_id.php",
        url: "http://localhost/JSON_beginner/TCC/trade_confirm_resend.php",
        dataType: "json",
        data:{
          'tokenKey': token_key,
          'tradeID': trade_id,
          _token: "",
          action: 'settlement'
        },
        success: function(resend) {
          // console.log(res.data);

          // var msg = settle.message;
          // var msg = settle.data.settlement_id;

          // var settleID = settle.data.settlement_id;

          console.log('sample = '+resend.status+'&'+resend.message);

          if (typeof resend !== 'object') {
            resend = jQuery.parseJSON(resend);
          }

          //if data is success
          if (resend.status == "success") {
            var msg = resend.message;
            document.getElementById("resend").innerHTML = msg;
            
          } else {
            var msg = resend.message;
            document.getElementById("resend").innerHTML = msg;
          }

          // if data is undefiened
          if (typeof resend.redirect !== 'undefined') {
            window.location = settle.redirect;
          }
      }
    });
  }


  // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
  //DEPOSIT

    $("#deposit_account").click(function () {
      
      var token_key = $("#token").val();
      var trade_id = $("#trade_id").val();

      // alert(token_key);

      deposit_account(token_key, trade_id);
    });

    function deposit_account(token_key, trade_id){
      $.ajax({
          type: "POST",
          // url: "http://localhost/JSON_beginner/TCC/settlement_id.php",
          url: "http://localhost/JSON_beginner/TCC/deposit_account.php",
          dataType: "json",
          data:{
            'tokenKey': token_key,
            'tradeID': trade_id,
            _token: "",
            action: 'deposit_account'
          },
          success: function(deposit) {

            console.log(deposit);

            // if (typeof price !== 'object') {
            //   price = jQuery.parseJSON(price);
            // }

            // //if data is success
            // if (price.status == "success") {
            //   var msg = price.data.settlement_id;
            //   document.getElementById("settlement_id").innerHTML = msg;
              
            // } else {
            //   var msg = price.message;
            //   document.getElementById("settlement_id").innerHTML = msg;
            // }

            // // if data is undefiened
            // if (typeof price.redirect !== 'undefined') {
            //   window.location = price.redirect;
            // }
        }
      });
    } 

  // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
  // Settlement create

  $("#settlement_create").click(function () {
    
    var token_key = $("#token").val();

    // alert(token_key);

    settlementCreate(token_key);
  });

  function settlementCreate(token_key){
    $.ajax({
        type: "POST",
        url: "http://localhost/JSON_beginner/TCC/settlement_create.php",
        dataType: "json",
        data:{
          'tokenKey': token_key,
          _token: "",
          action: 'settlement_create'
        },
        success: function(settle) {

          if (typeof settle !== 'object') {
            settle = jQuery.parseJSON(settle);
          }

          //if data is success
          if (settle.status == "success") {
            var msg = settle.data.settlement_id;
            // document.getElementById("settleNew").innerHTML = msg;
            document.getElementById("settle_id").value = msg;
            
          } else {
            var msg = settle.message;
            document.getElementById("settleNew").innerHTML = msg;
          }

          // if data is undefiened
          if (typeof settle.redirect !== 'undefined') {
            window.location = settle.redirect;
          }
      }
    });
  }


  // settlement id

  $("#settlement_summary").click(function () {
    
    var token_key = $("#token").val();
    var settle_summary = $("#settle_id").val();

    // alert(token_key+' = '+settle_summary);

    settlementSummary(token_key, settle_summary);
  });

  function settlementSummary(token_key, settle_summary){
    $.ajax({
        type: "POST",
        // url: "http://localhost/JSON_beginner/TCC/settlement_id.php",
        url: "http://localhost/JSON_beginner/TCC/settlement_id.php",
        dataType: "json",
        data:{
          'tokenKey': token_key,
          'settleID': settle_summary,
          _token: "",
          action: 'settlement_summary'
        },
        success: function(settle) {

          if (typeof settle !== 'object') {
            settle = jQuery.parseJSON(settle);
          }

          //if data is success
          if (settle.status == "success") {
            var msg = settle.data.settlement_id;
            document.getElementById("settleNew").innerHTML = msg;
            
          } else {
            var msg = settle.message;
            document.getElementById("settleNew").innerHTML = msg;
          }

          // if data is undefiened
          if (typeof settle.redirect !== 'undefined') {
            window.location = settle.redirect;
          }
      }
    });
  }

  // settlement add trade

  $("#settlement_add_trade").click(function () {
    
    var token_key = $("#token").val();
    var settle_summary = $("#settle_id").val();
    var trade_id_settle = $("#trade_id_settle").val();


    // alert('token = '+token_key+' settlement = '+settle_summary+' trade ='+trade_id_settle);

    settlementAddTrade(token_key, settle_summary, trade_id_settle);
  });

  function settlementAddTrade(token_key, settle_summary, trade_id_settle){
    $.ajax({
        type: "POST",
        // url: "http://localhost/JSON_beginner/TCC/settlement_id.php",
        url: "http://localhost/JSON_beginner/TCC/settlement_add_trade.php",
        dataType: "json",
        data:{
          'tokenKey': token_key,
          'settleID': settle_summary,
          'tradeIDsettle': trade_id_settle,
          _token: "",
          action: 'settlement_add_trade'
        },
        success: function(settle) {

          // console.log(settle);

          if (typeof settle !== 'object') {
            settle = jQuery.parseJSON(settle);
          }

          //if data is success
          if (settle.status == "success") {
            var msg = settle.status;
            document.getElementById("settleNew").innerHTML = msg;
            
          } else {
            var msg = settle.message;
            document.getElementById("settleNew").innerHTML = msg;
          }

          // if data is undefiened
          if (typeof settle.redirect !== 'undefined') {
            window.location = settle.redirect;
          }
      }
    });
  }

  // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
  // Trade_id

  $("#trade_submit").click(function () {

        var token_key = $("#token").val();
        var buy_currency = $("#buy_currency").val();
        var sell_currency = $("#sell_currency").val();
        var amount = $("#amount").val();
        var side = $("#side").val();  //side  1 = buy, 2 = sell
        var term_agreement = $('#term_agreement').is(':checked'); // use .is(:checked) to get value of true/false result
        var reason = $("#reason").val();

        // alert(buy_currency+ '/' +sell_currency+ '/' +amount+ '/' +side+ '/' +term_agreement+ '/' +reason);
        document.getElementById("result").innerHTML = buy_currency+'<br>'+sell_currency+'<br>'+amount+'<br>'+side+'<br>'+term_agreement+'<br>'+reason+'<br>'+token_key;
        checkingValue(token_key, buy_currency, sell_currency, amount, side, term_agreement, reason);
    
  });

  function checkingValue(token_key, buy_currency, sell_currency, amount, side, term_agreement, reason){
    alert(token_key+'\n\n'+buy_currency+'\n\n'+sell_currency+'\n\n'+amount+'\n\n'+side+'\n\n'+term_agreement+'\n\n'+reason);

    var msg="";

    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: 'http://localhost/JSON_beginner/TCC/trade.php',
      data: {
        'tokenKey': token_key,
        'buyCurrency': buy_currency,
        'sellCurrency': sell_currency,
        'amount': amount,
        'side': side,
        'termAgreement': term_agreement,
        'reason': reason,
        _token: "",
        action: 'trade'
      },

      success: function(data) {

        // console.log(data);

        // document.getElementById("response").innerHTML = data.message;

        if (typeof data !== 'object') {
          data = jQuery.parseJSON(data);
        }

        //if data is success
        if (data.status == "success") {
          msg = data.data.trade_id; 
          document.getElementById('trade_id').value = msg;
          document.getElementById('trade_id_settle').value = msg;
          document.getElementById('payment_trade_id').value = msg;
          document.getElementById("response").innerHTML = msg;
          
        } else {
          msg = data.message;
          document.getElementById("response").innerHTML = msg;
        }

        // if data is undefiened
        if (typeof data.redirect !== 'undefined') {
          window.location = data.redirect;
        }

      }
      
    });   
  }

  // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
  // Beneficiary

  $("#beneficiary_btn").click(function () {

        var token_key = $("#token").val();
        var nickname = $('#nickname').val();
        var account_ccy = $("#account_ccy").val();
        var beneficiary_name = $("#beneficiary_name").val();
        var bank_name = $("#bank_name").val();
        var bank_address = $("#bank_address").val();
        var account_number = $("#account_number").val();
        var sort_code = $("#sort_code").val();
        var destination_code = $("#destination_code").val();
        var beneficiary = $('#beneficiary').is(':checked'); // use .is(:checked) to get value of true/false result
        var source = $('#source').is(':checked'); // use .is(:checked) to get value of true/false result

        // alert(buy_currency+ '/' +sell_currency+ '/' +amount+ '/' +side+ '/' +term_agreement+ '/' +reason);
        document.getElementById("result").innerHTML = nickname+'<br>'+account_ccy+'<br>'+beneficiary_name+'<br>'+bank_name+'<br>'+bank_address+'<br>'+account_number+'<br>'+sort_code+'<br>'+destination_code+'<br>'+beneficiary+'<br>'+source+'<br>'+token_key;
        benefNew(token_key, nickname, account_ccy, beneficiary_name, bank_name, bank_address, account_number, sort_code, destination_code, beneficiary, source);
    
  });

  function benefNew(token_key, nickname, account_ccy, beneficiary_name, bank_name, bank_address, account_number, sort_code, destination_code, beneficiary, source){
    alert(token_key+'\n\n'+nickname+'\n\n'+account_ccy+'\n\n'+beneficiary_name+'\n\n'+bank_name+'\n\n'+bank_address+'\n\n'+account_number+'\n\n'+sort_code+'\n\n'+destination_code+'\n\n'+beneficiary+'\n\n'+source);

    var msg="";

    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: 'http://localhost/JSON_beginner/TCC/beneficiary.php',
      data: {
        'tokenKey': token_key,
        'n_name': nickname,
        'account_ccy': account_ccy,
        'beneficiary_name': beneficiary_name,
        'bank_name': bank_name,
        'bank_address': bank_address,
        'account_number': account_number,
        'sort_code': sort_code,
        'destination_code': destination_code,
        'beneficiary': beneficiary,
        'source': source,
        _token: "",
        action: 'beneficiary_new'
      },

      success: function(objbenef) {

        console.log(objbenef);

        // document.getElementById("response").innerHTML = data.message;

        if (typeof objbenef !== 'object') {
          objbenef = jQuery.parseJSON(objbenef);
        }

        //if data is success
        if (objbenef.status == "success") {
          msg = objbenef.data.beneficiary_id; 
          document.getElementById("benefNew").innerHTML = msg;
          document.getElementById("payment_beneficiary_id").value = msg;
          
        } else {
          msg = objbenef.message;
          document.getElementById("benefNew").innerHTML = msg;
        }

        // if data is undefiened
        if (typeof objbenef.redirect !== 'undefined') {
          window.location = objbenef.redirect;
        }

      }
      
    });   
  }
  // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
  // Payment Add

  $("#payment_add").click(function () {

      var token_key = $("#token").val();
      var trade_id = $("#payment_trade_id").val();
      var currency = $('#payment_currency').val();
      var payment_amount = $("#payment_amount").val();
      var beneficiary_id = $("#payment_beneficiary_id").val();
      var payment_reason = $("#payment_reason").val();
      var payment_reference = $("#payment_reference").val();

      // alert(token_key+ ' ~ ' +currency+ ' ~ ' +payment_amount+ ' ~ ' +beneficiary_id+ ' ~ ' +payment_reason+ ' ~ ' +trade_id+ ' ~ ' +payment_reference);
      paymentNew(token_key, currency, payment_amount, beneficiary_id, payment_reason, trade_id, payment_reference);
    
  });

  function paymentNew(token_key, currency, payment_amount, beneficiary_id, payment_reason, trade_id, payment_reference){
    // alert(token_key+ ' ~ ' +currency+ ' ~ ' +payment_amount+ ' ~ ' +beneficiary_id+ ' ~ ' +payment_reason+ ' ~ ' +trade_id+ ' ~ ' +payment_reference);
    var msg="";

    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: 'http://localhost/JSON_beginner/TCC/payment_add.php',
      data: {
        'tokenKey': token_key,
        'trade_id': trade_id,
        'currency': currency,
        'amount': payment_amount,
        'beneficiary_id': beneficiary_id,
        'reason': payment_reason,
        'payment_reference': payment_reference,
        _token: "",
        action: 'payment_add'
      },

      success: function(payadd) {

        console.log(payadd);

        // document.getElementById("paymentNew").innerHTML = payadd.message;

        if (typeof payadd !== 'object') {
          payadd = jQuery.parseJSON(payadd);
        }

        //if data is success
        if (payadd.status == "success") {
          msg = payadd.status; 
          document.getElementById("paymentNew").innerHTML = msg;
          
        }else{
          msg = payadd.status;
          document.getElementById("paymentNew").innerHTML = msg;
        }

        // if data is undefiened
        if (typeof payadd.redirect !== 'undefined') {
          window.location = payadd.redirect;
        }

      }
      
    });   
  }

  // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
  // Payment Add

  $("#paymentID").click(function () {

      var token_key = $("#token").val();
      var payment_currency = $("#pay_create_currency").val();

      //alert(token_key+' ~ '+payment_currency);
      paymentCreateID(token_key, payment_currency);
    
  });

  function paymentCreateID(token_key, payment_currency){

    var msg="";

    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: 'http://localhost/JSON_beginner/TCC/payment_create_id.php',
      data: {
        'tokenKey': token_key,
        'paymentCurrency': payment_currency,
        _token: "",
        action: 'payment_create_id'
      },

      success: function(payCreateID) {

        console.log(payCreateID);

        // document.getElementById("paymentNew").innerHTML = payCreateID.message;

        // if (typeof payCreateID !== 'object') {
        //   payCreateID = jQuery.parseJSON(payCreateID);
        // }

        // //if data is success
        // if (payCreateID.status == "success") {
        //   msg = payCreateID.status; 
        //   document.getElementById("payment_id").innerHTML = msg;
          
        // }else{
        //   msg = payCreateID.status;
        //   document.getElementById("payment_id").innerHTML = msg;
        // }

        // // if data is undefiened
        // if (typeof payCreateID.redirect !== 'undefined') {
        //   window.location = payCreateID.redirect;
        // }

      }
      
    });   
  }