// var portfolio = [];

// function Info (info){
//   this.title = info.title;
//   this.url = info.url;
//   this.author = info.author;
//   this.datePublished = info.datePublished;
// }

// Info.prototype.toHTML = function () {
//   var $newInfo = $('article.portProjects').clone();
//
//   $newInfo.find('h1').text(this.title);
//   $newInfo.find('url', this.url);
//   $newInfo.find('author', this.author);
//   $newInfo.find('date', this.datePublished);
//   $newInfo.find('time[pubdate]').attr('title', this.datePublished);
//   $newInfo.find('time').html('about ' + parseInt((new Date() - new Date (this.datePublished))/60/60/24/1000) + 'days ago');
//
//   $newInfo.append('<hr>');
//
//   $newInfo.removeClass('portProjects');
//
//   return $newInfo;
// };
//
// rawData.sort(function(a,b){
//   return(new Date(b.datePublished)) - (new Date(a.datePublished));
// });
//

var careers = [];

function Jobs(jobhistory){
  this.company = jobhistory.company;
  this.jobTitle = jobhistory.jobTitle;
  this.dateStarted = jobhistory.dateStarted;
  this.dateEnded = jobhistory.dateEnded;
  this.jobDescript = jobhistory.jobDescript;
  this.jobPublished = jobhistory.jobPublished;
}

Jobs.prototype.toHTML = function () {
  var $newJob = $('article.template2').clone();

  $newJob.data('jobTitle', this.jobTitle);
  $newJob.find('h1').text(this.company);
  $newJob.data('dateStarted', this.dateStarted);
  $newJob.data('dateEnded', this.dateEnded);
  $newJob.data('jobDescript', this.jobDescript);
  $newJob.data('jobPublished', this.jobPublished);
  $newJob.append('<hr>');

  $newJob.removeClass('template2');
  return $newJob;
};

jobData.sort(function(a,b){
  return(new Date(b.jobPublished)) - (new Date(a.jobPublished));
});

jobData.forEach(function(ele){
  careers.push(new Jobs(ele));
});

careers.forEach(function(a){
  $('#jobs').append(a.toHTML());
});
