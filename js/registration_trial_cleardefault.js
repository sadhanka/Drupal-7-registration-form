(function ($) {
    Drupal.behaviors.cleardefault = {
    attach: function (context, settings) {
      $('#edit-login', context).once('cleardefault ', function () {
        this.defaultValue = this.value;
        $(this).click(function(){
          if(this.value == this.defaultValue){
            $(this).val("");
          }
          return false;
        });
        $(this).blur(function(){
          if(this.value == ""){
            $(this).val(this.defaultValue);
          }
        });
      });
      $('#edit-city', context).once('cleardefault ', function () { 
        this.defaultValue = this.value;
        $(this).click(function(){
          if(this.value == this.defaultValue){
            $(this).val("");
          }
          return false;
        });
        $(this).blur(function(){
          if(this.value == ""){
            $(this).val(this.defaultValue);
          }
        });
      });
      $('#edit-subdomain', context).once('cleardefault ', function () {
        this.defaultValue = this.value;
        $(this).click(function(){
          if(this.value == this.defaultValue){
            $(this).val("");
          }
          return false;
        });
        $(this).blur(function(){
          if(this.value == ""){
            $(this).val(this.defaultValue);
          }
        });
      });
    }
  };
}(jQuery));