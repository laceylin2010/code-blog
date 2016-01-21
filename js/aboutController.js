(function(module){
  var aboutController = {};

  aboutController.index = function(){
    $('.nav-content').hide();
    $('#my-content').show();
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;

})(window);
