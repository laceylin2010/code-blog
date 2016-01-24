(function(module){
  var projectController = {};

  projectController.index = function (){
    $('.nav-content').hide();
    $('#projects').show();
    repos.requestRepos(repoView.index);

  };

  Project.fetchAll();
  projectController.index();

  module.projectController = projectController;


})(window);
