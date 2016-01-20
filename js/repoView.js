(function(module){
  var repoView = {};

  var ui = function(){
    var $about = $('#my-content');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var render = function(repo){
    return $('<li>')
      .html('<a href="' + repo.html_url + '">' + repo.full_name + '</a>');
  };

  repoView.index = function(){
    ui();

    $('#my-content ul').append(
      repos.with('default_branch').map(render)
    );
  };

  module.repoView = repoView;
})(window);
