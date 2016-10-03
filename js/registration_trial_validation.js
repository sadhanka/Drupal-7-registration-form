(function ($) {
  function validateTextfield(textfield_id, min_length) {
    var textfield = $(textfield_id);
    if(textfield.val().length < min_length) {
      textfield.css("border-color", "red");
      return false;
    }
    else {
      textfield.css("border-color", "white");
      return true;
    }
  }
  function validatePhoneTextfield(textfield_id, min_length) {
    var textfield = $(textfield_id);
    var code_numbers = textfield.val();
    code_numbers = code_numbers.replace(/\D/g,'');
    if(code_numbers.length !== min_length) {
      textfield.css("border-color", "red");
      return false;
    }
    else {
      textfield.css("border-color", "white");
      return true;
    }
  }
  function domainFieldListener() {
    $("#edit-subdomain").once("subdomain_textfield", function(){
      $(this).blur(function(){
         validateTextfield("#edit-subdomain", 1);
      });
    });
  }
  function loginFieldListener() {
    $("#edit-login").once("login_textfield", function(){
      $(this).blur(function(){
         validateTextfield("#edit-login", 1);
      });
    });
  }
  function countryFieldListener() {
    $("#edit-country").once("country_textfield", function(){
      $(this).blur(function(){
         validateTextfield("#edit-country", 2);
      });
    });
  }
  function codeFieldListener(){
    $("#edit-code").once("code_textfield", function(){
      $(this).blur(function(){
         validatePhoneTextfield("#edit-code", 2);
      });
    });
  }
  function numberFieldListener() {
    $("#edit-number").once("number_textfield", function(){
      $(this).blur(function(){
         validatePhoneTextfield("#edit-number", 10);
      });
    });
  }
  function submitListener() {
    $("#edit-submit").once("registration_form_submit", function(){
      $(this).click(function(e){
        if(!validateTextfield("#edit-subdomain", 1) || !validateTextfield("#edit-login", 1) || !validateTextfield("#edit-country", 2) || !validatePhoneTextfield("#edit-code", 2) || !validatePhoneTextfield("#edit-number", 10)) {
          e.preventDefault();
        }
      });
    });
  }

  Drupal.behaviors.registrationTrialValidation = {
    attach:function() {
      domainFieldListener();
      loginFieldListener();
      countryFieldListener();
      codeFieldListener();
      numberFieldListener();
      submitListener();
    }
  };
}(jQuery));