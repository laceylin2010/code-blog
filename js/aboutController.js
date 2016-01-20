(function(module){
  var aboutController = {};

  aboutController.index = function(){
    $('.nav-content').hide();
    $('#aboutme').show();
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;

})(window);
