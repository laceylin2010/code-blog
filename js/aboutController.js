(function(module){
  var aboutController = {};

  aboutController.index = function(){
    $('.nav-content').hide();
    $('#about-me-descript').show();
  };

  module.aboutController = aboutController;

})(window);
