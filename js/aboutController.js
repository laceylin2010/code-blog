(function(module){
  var aboutController = {};

  aboutController.index = function(){
    $('.nav-content').hide();
    $('#about-me-descript').show();
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;

})(window);
