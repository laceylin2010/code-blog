function SuperHero(opts){
  this.title = opts.title;
  this.category = opts.category;
  this.favoriteColor = opts.favoriteColor;
  this.body = opts.body;
}

SuperHeroes.all = [];

SuperHero.loadAll = function(heroData){
  heroData.forEach(function(ele){
    SuperHero.all.push(new SuperHero(ele));
  });
};

SuperHero.fetchAll = function() {
  if(localStorage.SuperHero) {
    Superhero.loadAll(JSON.parse(localStorage.SuperHero));
    SuperHero.
  }
}
