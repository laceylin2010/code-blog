var portfolio = [];

function Info (info){
  this.title = info.title;
  this.titleUrl = info.titleUrl;
  this.author = info.author;
  this.publishedOn = info.publishedOn;
}

Info.prototype.toHTML = function(){
  var portfolioTemplate = $('#about-template').html();
  var compileTemplate = Handlebars.compile(portfolioTemplate);
  return compileTemplate(this);
};

portfolioData.sort(function(a,b){
  return(new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

portfolioData.forEach(function(ele){
  portfolio.push(new Info(ele));
});

portfolio.forEach(function(b){
  $('#myCoolStuff').append(b.toHTML());
});
