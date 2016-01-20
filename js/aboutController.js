(function(module){
  var aboutController = {};

  aboutController.index = function(){
    $('.nav-content').hide();
    $('#personal-content').show();
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;

})(window);
