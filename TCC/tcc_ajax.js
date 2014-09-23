  $.ajax({
      type: "GET",
      url: "http://localhost/JSON_beginner/TCC/authentication.php",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(result) {
        console.log(result);
        // document.location = 'trade.html';
        // $('#tokenID').html(result.token_id);
        // console.log(res.data);
      var tokenKey = result.data;
      // var user = result.user;

      // alert(user);

      // alert($.cookie('token_id'));
      //result show on success respond
      document.getElementById('tokenID').innerHTML = tokenKey;
      document.getElementById('token').value = tokenKey;

    }
  });

  // $( document ).ajaxComplete(function( event, xhr, settings ) {
  //   alert(xhr.responseText);
  // });


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

        // document.getElementById("result").innerHTML = buy_currency+'<br>'+sell_currency+'<br>'+amount+'<br>'+side+'<br>'+term_agreement+'<br>'+reason+'<br>'+token_key;
        if(buy_currency != "" && sell_currency != "" && amount != "" && side != "" && term_agreement == true && reason != ""){
            checkingValue(token_key, buy_currency, sell_currency, amount, side, term_agreement, reason);
           
        }else{
          alert("one of the field is empty");
        }

        //checkingValue(token_key, buy_currency, sell_currency, amount, side, term_agreement, reason);
        //settlementCreate(token_key);
    
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

          settlementCreate(token_key);
          
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
  // Confirm Resend ID

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

          console.log('sample = '+resend.status+' & '+resend.message);

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
  // Trade Beneficiary

  $("#trade_ben").click(function () {

    var token_key = $("#token").val();
    var buy_currency = $("#buy_currency").val();
    var sell_currency = $("#sell_currency").val();
    var amount = $("#amount_ben").val();
    var side = $("#side").val();  //side  1 = buy, 2 = sell
    var term_agreement = $('#term_agreement_ben').is(':checked'); // use .is(:checked) to get value of true/false result
    var reason = $("#reason_ben").val();
    var beneficiary_id = $("#beneficiary_id").val();
    var payment_ben_type = $("#payment_ben_type").val();
    var payment_ref = $("#payment_ref").val();

     // alert(token_key+'\n\n'+buy_currency+'\n\n'+sell_currency+'\n\n'+amount+'\n\n'+side+'\n\n'+term_agreement+'\n\n'+reason+'\n\n'+beneficiary_id+'\n\n'+payment_ben_type+'\n\n'+payment_ref);

    if(buy_currency != "" && sell_currency != "" && amount != "" && side != "" && term_agreement == true && reason != "" && beneficiary_id != "" && payment_ben_type != "" && payment_ref != ""){
        tradeBeneficiary(token_key, buy_currency, sell_currency, amount, side, term_agreement, reason, beneficiary_id, payment_ben_type, payment_ref);
        
    }else{
      alert("one of the field is empty");
    }

  });

  function tradeBeneficiary(token_key, buy_currency, sell_currency, amount, side, term_agreement, reason, beneficiary_id, payment_ben_type, payment_ref){
    alert(token_key+'\n\n'+buy_currency+'\n\n'+sell_currency+'\n\n'+amount+'\n\n'+side+'\n\n'+term_agreement+'\n\n'+reason+'\n\n'+beneficiary_id+'\n\n'+payment_ben_type+'\n\n'+payment_ref);

    var msg="";

    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: 'http://localhost/JSON_beginner/TCC/trade_ben.php',
      data: {
        'tokenKey': token_key,
        'buyCurrency': buy_currency,
        'sellCurrency': sell_currency,
        'amount': amount,
        'side': side,
        'termAgreement': term_agreement,
        'reason': reason,
        'beneficiary_id': beneficiary_id,
        'payment_ben_type': payment_ben_type,
        'payment_ref': payment_ref,
        _token: "",
        action: 'trade_ben'
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

          settlementCreate(token_key);
            
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
  // client quote 
  $("#client_quote").click(function () {

        var token_key = $("#token").val();
        var cq_buy_currency = $("#cq_buy_currency").val();
        var cq_sell_currency = $("#cq_sell_currency").val();
        var cq_amount = $("#cq_amount").val();
        var cq_side = $("#cq_side").val();  //side  1 = buy, 2 = sell


        // document.getElementById("result").innerHTML = buy_currency+'<br>'+sell_currency+'<br>'+amount+'<br>'+side+'<br>'+term_agreement+'<br>'+reason+'<br>'+token_key;
        if(cq_buy_currency != "" && cq_sell_currency != "" && cq_amount != "" && cq_side != "" ){
           clientquote(token_key, cq_buy_currency, cq_sell_currency, cq_amount, cq_side);
            // alert(token_key+'\n\n'+cq_buy_currency+'\n\n'+cq_sell_currency+'\n\n'+cq_amount+'\n\n'+cq_side);
           
        }else{
          alert("one of the field is empty");
        }

        //checkingValue(token_key, buy_currency, sell_currency, amount, side, term_agreement, reason);
        //settlementCreate(token_key);
    
  });

  function clientquote(token_key, cq_buy_currency, cq_sell_currency, cq_amount, cq_side){
    
    alert(token_key+'\n\n'+cq_buy_currency+'\n\n'+cq_sell_currency+'\n\n'+cq_amount+'\n\n'+cq_side);

    var msg="";

    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: 'http://localhost/JSON_beginner/TCC/client_quote.php',
      data: {
        'tokenKey': token_key,
        'buyCurrency': cq_buy_currency,
        'sellCurrency': cq_sell_currency,
        'amount': cq_amount,
        'side': cq_side,
        _token: "",
        action: 'client_quote'
      },

      success: function(clientQuote) {

         console.log(clientQuote);

        document.getElementById("cq_response").innerHTML = clientQuote.status;

        // if (typeof clientQuote !== 'object') {
        //   clientQuote = jQuery.parseJSON(clientQuote);
        // }

        // //if clientQuote is success
        // if (clientQuote.status == "success") {
        //   msg = clientQuote.clientQuote.trade_id; 
        //   document.getElementById('trade_id').value = msg;
        //   document.getElementById('trade_id_settle').value = msg;
        //   document.getElementById('payment_trade_id').value = msg;
        //   document.getElementById("response").innerHTML = msg;

        //   settlementCreate(token_key);
          
        // } else {
        //   msg = clientQuote.message;
        //   document.getElementById("response").innerHTML = msg;
        // }

        // // if clientQuote is undefiened
        // if (typeof clientQuote.redirect !== 'undefined') {
        //   window.location = clientQuote.redirect;
        // }

      }
      
    });   
  }
  
  // client CCY Pair
  
  $("#stale").click(function () {

        var token_key = $("#token").val();
        var choice1 = $("#choice1").val();
        var choice2 = $("#choice2").val();
        // var accept_stale = $('#accept_stale').is(':checked'); 

        stale(token_key, choice1, choice2);
        // alert(token_key+'\n\n'+choice1+'\n\n'+choice2);
    
  });

  function stale(token_key, choice1, choice2){
    
    alert(token_key+'\n\n'+choice1+'\n\n'+choice2);

    var msg="";

    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: 'http://localhost/JSON_beginner/TCC/ccy_pair.php',
      data: {
        'tokenKey': token_key,
        'choice1': choice1,
        'choice2': choice2,
        // 'accept_stale': accept_stale,
        _token: "",
        action: 'ccy_pair'
      },

      success: function(ccyPair) {

         console.log(ccyPair);

        // document.getElementById("cq_response").innerHTML = ccyPair.status;

        // if (typeof ccyPair !== 'object') {
        //   ccyPair = jQuery.parseJSON(ccyPair);
        // }

        // //if ccyPair is success
        // if (ccyPair.status == "success") {
        //   msg = ccyPair.ccyPair.trade_id; 

        //   settlementCreate(token_key);
          
        // } else {
        //   msg = ccyPair.message;
        //   document.getElementById("response").innerHTML = msg;
        // }

        // // if ccyPair is undefiened
        // if (typeof ccyPair.redirect !== 'undefined') {
        //   window.location = ccyPair.redirect;
        // }

      }
      
    });   
  }
  // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
  // send fund 
   $("#send_fund").click(function () {

         var trade_id = $("#trade_id").val();

         //alert("send funds");

         if(trade_id != ""){
            
            sendFund(trade_id);
            
        }else{
          alert("Specify a trade ID");
        }
        
  });

   function sendFund(trade_id){

      alert("send fund to trade ID = "+trade_id);

      $.ajax({
        type: 'POST',
        dataType: 'json',
        // url: 'https://clientdemo.thecurrencycloud.com/proxy/transactron/confirm_funds_sent?deal_ref='+trade_id,
        url: "http://localhost/JSON_beginner/TCC/send_fund.php",
        data:{
          'tradeID': trade_id,
          _token: "",
          action: 'send_fund'
        },

        success: function(send_fund) {
            // console.log(res.data);

            console.log(send_fund);

            // console.log('sample = '+send_fund.status+' & '+send_fund.message);

            // if (typeof send_fund !== 'object') {
            //   send_fund = jQuery.parseJSON(send_fund);
            // }

            // //if data is success
            // if (send_fund.status == "success") {
            //   var msg = send_fund.message;
            //   document.getElementById("resend").innerHTML = msg;
              
            // } else {
            //   var msg = send_fund.message;
            //   document.getElementById("resend").innerHTML = msg;
            // }

            // // if data is undefiened
            // if (typeof send_fund.redirect !== 'undefined') {
            //   window.location = settle.redirect;
            // }
        }
      });  
   }

  // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
  //DEPOSIT

    $("#deposit_account").click(function () {
      
      var token_key = $("#token").val();
      var trade_id = $("#trade_id").val();

      // alert(token_key+' ~ '+trade_id);

      deposit_account(token_key, trade_id);
    });

    function deposit_account(token_key, trade_id){
      $.ajax({
          type: "GET",
          url: "http://localhost/JSON_beginner/TCC/deposit_account.php",
          dataType: "json",
          crossDomain: true,
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
            var ntc_msg = "success";
            var msg = settle.data.settlement_id;
            // document.getElementById("settleNew").innerHTML = msg;
            document.getElementById("settleNew").innerHTML = ntc_msg;
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

  // settlement release trade

  $("#settlement_release_trade").click(function () {
    
    var token_key = $("#token").val();
    var settle_summary = $("#settle_id").val();

    settlementReleaseTrade(token_key, settle_summary);
  });

  function settlementReleaseTrade(token_key, settle_summary){
    alert('settlement = '+settle_summary);
    $.ajax({
        type: "GET",
        url: "http://localhost/JSON_beginner/TCC/settlement_release_trade.php",
        dataType: "json",
        data:{
          'tokenKey': token_key,
          'settleID': settle_summary,
          _token: "",
          action: 'settlement_release_trade'
        },
        success: function(settle_release) {

          // console.log(settle);

          if (typeof settle_release !== 'object') {
            settle_release = jQuery.parseJSON(settle_release);
          }

          //if data is success
          if (settle_release.status == "success") {
            var msg = settle_release.status;
            document.getElementById("settleNew").innerHTML = msg;
            
          } else {
            var msg = settle_release.message;
            document.getElementById("settleNew").innerHTML = msg;
          }

          // if data is undefiened
          if (typeof settle_release.redirect !== 'undefined') {
            window.location = settle_release.redirect;
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

   $("#payment_type").click(function () {

        var token_key = $("#token").val();
        var ccy = $('#ccy').val();
        var pay_type = $('#pay_type').val();
        var destination_country_code = $("#destination_country_code").val();

        // alert(token_key+ '/' +ccy+ '/' +destination_country_code);
        // document.getElementById("result").innerHTML = nickname+'<br>'+account_ccy+'<br>'+beneficiary_name+'<br>'+bank_name+'<br>'+bank_address+'<br>'+account_number+'<br>'+sort_code+'<br>'+destination_code+'<br>'+beneficiary+'<br>'+source+'<br>'+token_key;
        paymentType(token_key, ccy, destination_country_code, pay_type);
    
  });

  function paymentType(token_key, ccy, destination_country_code, pay_type){
  alert(token_key+'\n\n'+ccy+'\n\n'+destination_country_code+'\n\n'+pay_type);

  var msg="";

  $.ajax({
    type: 'POST',
    dataType: 'json',
    url: 'http://localhost/JSON_beginner/TCC/payment_type.php',
    data: {
      'tokenKey': token_key,
      'ccy': ccy,
      'destination_country_code': destination_country_code,
      'pay_type': pay_type,
      _token: "",
      action: 'payment_type'
    },

    success: function(paymentType) {

      console.log(paymentType);

      // document.getElementById("response").innerHTML = data.message;

      if (typeof paymentType !== 'object') {
        paymentType = jQuery.parseJSON(paymentType);
      }

      //if data is success
      if (paymentType.status == "success") {
        msg = paymentType.data.beneficiary_id; 
        document.getElementById("paymentType").innerHTML = msg;
        
      } else {
        msg = paymentType.message;
        document.getElementById("paymentType").innerHTML = msg;
      }

      // if data is undefiened
      if (typeof paymentType.redirect !== 'undefined') {
        window.location = paymentType.redirect;
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
      // var payment_type = $("#payment_type").val();
      // var payer_type = $("#payer_type").val();
      // var payer_company_name = $("#payer_company_name").val();
      // var payer_address = $("#payer_address").val();
      // var payer_city = $("#payer_city").val();
      // var payer_country = $("#payer_country").val();

      //alert(token_key+ ' ~ ' +currency+ ' ~ ' +payment_amount+ ' ~ ' +beneficiary_id+ ' ~ ' +payment_reason+ ' ~ ' +trade_id+ ' ~ ' +payment_reference+ ' ~ ' +payment_type+ ' ~ ' +payer_type+ ' ~ ' +payer_company_name+ ' ~ ' +payer_address+ ' ~ ' +payer_city+ ' ~ ' +payer_country);
      // paymentNew(token_key, currency, payment_amount, beneficiary_id, payment_reason, trade_id, payment_reference, payment_type, payer_type, payer_company_name, payer_address, payer_city, payer_country);
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
        'payment_amount': payment_amount,
        'beneficiary_id': beneficiary_id,
        'reason': payment_reason,
        'payment_reference': payment_reference,
        // 'payment_type': payment_type,
        // 'payer_type': payer_type,
        // 'payer_company_name': payer_company_name,
        // 'payer_address': payer_address,
        // 'payer_city': payer_city,
        // 'payer_country': payer_country,
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


  // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
  // Find Contact

  $("#contact_all").click(function () {


    var token_key = $("#token").val();
    
     contact_all(token_key);

  });

  function contact_all(token_key){
      $.ajax({
          type: "GET",
          dataType: "json",
          url: "http://localhost/JSON_beginner/TCC/contact_all.php",
          data:{
            'tokenKey': token_key,
            _token: "",
            action: ' contact_all'
          },
          success: function(result) {
            console.log(result);          
        }
      });
  }

  $("#findContact_ref_btn").click(function () {

      var token_key = $("#token").val();
      var find_cont_ref = $("#find_cont_ref").val();

      findContactRef(token_key, find_cont_ref);
    
  });

  function findContactRef(token_key, find_cont_ref){
    alert(token_key+' ~ '+find_cont_ref);
    var msg="";

    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: 'http://localhost/JSON_beginner/TCC/find_contact_ref.php',
      data: {
        'tokenKey': token_key,
        'find_cont_ref': find_cont_ref,
        _token: "",
        action: 'contact_ref'
      },

      success: function(FindContact) {

        console.log(FindContact);

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

  // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
  // Adding Contact Ref

  $("#contact_ref_btn").click(function () {

      var token_key = $("#token").val();
      var con_firstname = $("#con_firstname").val();
      var con_lastname = $("#con_lastname").val();
      var con_email = $("#con_email").val();
      var acct_numb = $("#acct_numb").val();
      var cont_ref = $("#cont_ref").val();

      //alert(token_key+'\n\n'+con_firstname+'\n\n'+con_lastname+'\n\n'+con_email+'\n\n'+acct_numb+'\n\n'+cont_ref);
      addContactRef(token_key, con_firstname, con_lastname, con_email, acct_numb, cont_ref);
    
  });

  function addContactRef(token_key, con_firstname, con_lastname, con_email, acct_numb, cont_ref){
    alert(token_key+'\n\n'+con_firstname+'\n\n'+con_lastname+'\n\n'+con_email+'\n\n'+acct_numb+'\n\n'+cont_ref);
    var msg="";

    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: 'http://localhost/JSON_beginner/TCC/add_contact_ref.php',
      data: {
        'tokenKey': token_key,
        'con_firstname': con_firstname,
        'con_lastname': con_lastname,
        'con_email': con_email,
        'acct_numb': acct_numb,
        'cont_ref': cont_ref,
        _token: "",
        action: 'add_contact_ref'
      },

      success: function(AddContactRef) {

        console.log(AddContactRef);

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