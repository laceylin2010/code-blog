(function(module){

  function Movie (opts){
    this.title = opts.title;
    this.director = opts.director;
    this.genre = opts.genre;
    this.summary = opts.summary;
  }

  Movie.all = [];

  Movie.prototype.toHTML = function(){
    var template = Handlebars.compile($('#movie-template').text());
    this.summary = marked(this.summary);

    return template(this);
  };


  Movie.loadAll = function(movieData){
    Movie.all = movieData.map(function(ele){
      return new Movie(ele);
    });
  };

  Movie.fetchAll = function(next){
    if(localStorage.movieData){
      Movie.loadAll(JSON.parse(localStorage.movieData));
      next();
    }else{
      $.getJSON('/data/movie.json', function(movieData){
        Movie.loadAll(movieData);
        localStorage.movieData = JSON.stringify(movieData);
        next();
      });
    }
  };

  Movie.allTitles = function(){
    return Movie.all.map(function(movie){
      return movie.title;
    })
      .reduce(function(a, b){
        if(a.indexOf(b)<0);{
          a.push(b);
        }
        return a;
      },[]);
  };

  Movie.allGenre = function(){
    return Movie.all.map(function(movie){
      return movie.genre;
    })
      .reduce(function(a, b){
        if(a.indexOf(b)<0);{
          a.push(b);
        }
        return a;
      },[]);
  };

  Movie.titleGenre = function(){
    return Movie.allTitles().map(function(title){
      return {
        name: title,
        genre: Movie.all
        .filter(function(movie){
          return (movie.title === title);
        })
        .map(function(movie){
          return movie.genre;
        })
        .reduce(function(a,b){
          return (a+b);
        })
      };
    });
  };

  module.Movie = Movie;

})(window);
