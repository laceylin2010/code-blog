(function(module){


  var movieView = {};

  movieView.initAdminPage = function() {
    var template = Handlebars.compile($('#movie-template').text());
    Movie.titleGenre().forEach(function(movie){
      $('.movie-data-template').append(template(movie));
    });
  };


  module.movieView = movieView;
})(window);
