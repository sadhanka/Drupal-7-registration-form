(function ($) {
  function validateDomainTextfield() {
    var textfield = $("#edit-subdomain");
    if(!textfield.val().length) {
      textfield.css("border-color", "red");
      return false;
    }
    return true;
  }
  function validateLoginTextfield() {
    var textfield = $("#edit-login");
    if(!textfield.val().length) {
      textfield.css("border-color", "red");
      return false;
    }
    return true;
  }
  function validateCountryTextfield() {
    var textfield = $("#edit-country");
    if(!textfield.val().length) {
      textfield.css("border-color", "red");
      return false;
    }
    return true;
  }
  function validateCodeTextfield() {
    var textfield = $("#edit-code");
    if(!textfield.val().length || textfield.val().length != 3) {
      textfield.css("border-color", "red");
      return false;
    }
    return true;
  }
  function validateNumberTextfield() {
    var textfield = $("#edit-number");
    if(!textfield.val().length) {
      textfield.css("border-color", "red");
      return false;
    }
    return true;
  }
  function domainFieldListener() {
    $("#edit-subdomain").once("subdomain_textfield", function(){
      $(this).blur(function(){
         validateDomainTextfield();
      });
    });
  }
  function loginFieldListener() {
    $("#edit-login").once("login_textfield", function(){
      $(this).blur(function(){
         validateLoginTextfield();
      });
    });
  }
  function countryFieldListener() {
    $("#edit-country").once("country_textfield", function(){
      $(this).blur(function(){
         validateCountryTextfield();
      });
    });
  }
  function codeFieldListener(){
    $("#edit-code").once("code_textfield", function(){
      $(this).blur(function(){
         validateCodeTextfield();
      });
    });
  }
  function numberFieldListener() {
    $("#edit-number").once("number_textfield", function(){
      $(this).blur(function(){
         validateNumberTextfield();
      });
    });
  }
  function submitListener() {
    $("#edit-submit").once("registration_form_submit", function(){
      $(this).click(function(e){
        if(!validateDomainTextfield() || !validateLoginTextfield() || !validateCountryTextfield() || !validateCodeTextfield() || !validateNumberTextfield()) {
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