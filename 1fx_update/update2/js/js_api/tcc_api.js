//beneficiary API

$(document).on('click','#beneficiary_btn',function(e){
  e.preventDefault();
  var token_key = $("#token").val();
  var $form = $('form[name="beneficiary"]'),
      benef;
  if($form.valid()){
    benef = 'token_key='+token_key+'&'+$form.serialize();

    // alert(benef);
    ajax_benef(benef);
  }
});

//event handler for submit button
$('form[name="beneficiary"]').validate({
  debug: true,
  rules : {
    nickname : "required",
    account_ccy : "required",
    beneficiary_name : "required",
    bank_name : "required",
    bank_address : "required",
    account_number : "required",
    sort_code : "required",
    destination_code : "required"
  },
  messages : {
    nickname : "",
    account_ccy : "",
    beneficiary_name : "",
    bank_name : "",
    bank_address : "",
    account_number : "",
    sort_code : "",
    destination_code : ""
  }
});

var ajax_benef = function(benef){
  $.ajax({
    url : "http://192.168.1.70/TCC/beneficiary.php",
    type: "post",
    dataType : "json",
    data : benef,
    success: function(result){
      if(result.status == 'success'){
        console.log(result);
        // window.location = result.redirect;
        var email = $("#email").val(); 
        var benID = result.data.beneficiary_id
        // alert(result.status);
        beneficiary_id(benID, email);
      }
      else{
        alert(result.status);
      }
    },
    error: function(xhr,status){
      alert(xhr.responseText);
    }
  });
}

function beneficiary_id(benID, email){

    alert(benID+"\n\n"+email);
    
    var msg="";

    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: 'http://192.168.1.70/controller/ben_id.php',
      data: {
        'email': email,
        'beneficiary_id': benID,
        _token: "",
        action: 'beneficiary_id_act'
      },

      success: function(objbenefId) {

        console.log(objbenefId);

        window.location = "trade.html";

      }
    });
}


// trade API

$(document).on('click','#trade_ben',function(e){
  e.preventDefault();
  var token_key = $("#token").val();
  var $form = $('form[name="tradeForm"]'),
      tradeBen;
  if($form.valid()){
    tradeBen = 'token_key='+token_key+'&'+$form.serialize();

    // alert(tradeBen);
    ajax_trade(tradeBen);
  }
});

//event handler for submit button
$('form[name="tradeForm"]').validate({
  debug: true,
  rules : {
    buy_currency : "required",
    amount_ben : "required",
    sell_currency : "required",
    side : "required",
    term_agreement_ben : "required",
    reason_ben : "required",
    beneficiary_id : "required",
    payment_ben_type : "required",
    payment_ref : "required"
  },
  messages : {
    buy_currency : "",
    amount_ben : "",
    sell_currency : "",
    side : "",
    term_agreement_ben : "Need to accept the Terms and Agreement",
    reason_ben : "",
    beneficiary_id : "",
    payment_ben_type : "",
    payment_ref : ""
  }
});

var ajax_trade = function(tradeBen){
  $.ajax({
    url : "http://192.168.1.70/TCC/trade_ben.php",
    type: "POST",
    dataType : "json",
    data : tradeBen,
    success: function(result){
      if(result.status == 'success'){

        console.log(result);
        // window.location = result.redirect;
        var tradeID = result.data.trade_id
        // alert(result.status);
        alert(tradeID);

      }else{

        alert(result.status);

      }
    },
    error: function(xhr,status){
      alert(xhr.responseText);
    }
  });
}  