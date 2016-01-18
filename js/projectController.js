(function(module){
  var projectController = {};

  projectController.index = function (){
    $('.nav-content').hide();
    $('#projects').show();
  };

  Project.fetchAll();
  projectController.index();

  module.projectController = projectController;


})(window);
