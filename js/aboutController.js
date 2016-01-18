(function(module){
  var aboutController = {};

  aboutController.index = function(){
    $('.nav-content').hide();
    $('#aboutme').show();
    console.log("Inside aboutController.index()")
  };

  aboutController.index();

  module.aboutController = aboutController;

})(window);
