var portfolio = [];

function Info (info){
  this.title = info.title;
  this.titleUrl = info.titleUrl;
  this.author = info.author;
  this.publishedOn = info.publishedOn;
}

Info.prototype.toHTML = function(){
  var $newInfo = $('article.template').clone();

  $newInfo.find('h2').html('<a href="' + this.titleUrl + '">' + this.title + '</a>');
  // $newInfo.find('h2').text(this.title);
  $newInfo.find('.authorname').text(this.author);
  $newInfo.find('.datetime').text(this.publishedOn);
  $newInfo.find('date[pubdate]').attr('title', this.publishedOn);
  $newInfo.find('time').html('about ' + parseInt((new Date() - new Date (this.publishedOn))/60/60/24/1000) + ' days ago');
  $newInfo.append('<hr>');
  $newInfo.removeClass('template');

  return $newInfo;
};

portfolioData.sort(function(a,b){
  return(new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

portfolioData.forEach(function(ele){
  portfolio.push(new Info(ele));
});

portfolio.forEach(function(b){
  $('#portfolio').append(b.toHTML());
});


var careers = [];

function Jobs(jobhistory){
  this.jobTitle = jobhistory.jobTitle;
  this.company = jobhistory.company;
  this.datesWorked = jobhistory.datesWorked;
  this.jobDescript = jobhistory.jobDescript;
}

Jobs.prototype.toHTML = function () {
  var $newJob = $('article.template2').clone();

  $newJob.find('h2').text(this.jobTitle);
  // console.log(this.jobTitle);
  $newJob.find('.company').text(this.company);
  $newJob.find('.employedDates').text(this.datesWorked);
  $newJob.find('.jobdescription').text(this.jobDescript);
  $newJob.append('<hr>');

  $newJob.removeClass('template2');
  return $newJob;
};

jobData.forEach(function(ele){
  careers.push(new Jobs(ele));
});

careers.forEach(function(a){
  // console.log(a.toHTML());
  $('#employment').append(a.toHTML());
});

$('#about-me').on('click', function(){
  $('.jobhistory').fadeOut('fast', function() {
    $('.bio').fadeIn('fast');
  });
});

$('#employedhistory').on('click', function(){
  $('.bio').fadeOut('fast', function() {
    $('.jobhistory').fadeIn('fast');
  });
});

$('#mainpage').on('click', function(){
  location.reload();
});
