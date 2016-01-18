(function(module){

  var homeController = {};

  homeController.index = function() {
    $('.nav-content').show();


    console.log('clicked home');
  };

  module.homeController = homeController;

})(window);
