(function(module){
  var repoView = {};

  var ui = function(){
    var $projects = $('#projects');

    $projects.find('ul').empty();
    $projects.show().siblings().not('.navbar').hide();
  };

  var render = function(repo){
    return $('<li>')
      .html('<a href="' + repo.html_url + '">' + repo.full_name + '</a>');
  };

  repoView.index = function(){
    ui();

    $('#projects ul').append(
      repos.with('default_branch').map(render)
    );
  };

  module.repoView = repoView;
})(window);
