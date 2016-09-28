(function ($) {
    Drupal.behaviors.cleardefault = {
    attach: function (context, settings) {
      $('#edit-login', context).once('cleardefault', function () {
        this.defaultValue = this.value;
        $(this).click(function(){
          if(this.value == this.defaultValue){
            $(this).val("");
          }
          return false;
        });
      });
      $('#edit-city', context).once('cleardefault', function () { 
        this.defaultValue = this.value;
        $(this).click(function(){
          if(this.value == this.defaultValue){
            $(this).val("");
          }
          return false;
        });
      });
      $('#edit-subdomain', context).once('cleardefault', function () {
        this.defaultValue = this.value;
        $(this).click(function(){
          if(this.value == this.defaultValue){
            $(this).val("");
          }
          return false;
        });
      });
    }
  };
}(jQuery));