// var portfolio = [];

function Info (info){
  this.title = info.title;
  this.url = info.url;
  this.author = info.author;
  this.datePublished = info.datePublished;
}

Info.prototype.toHTML = function () {
  var $newInfo = $('article.portProjects').clone();

  $newInfo.data('title', this.title);
  $newInfo.data('url', this.url);
  $newInfo.data('author', this.author);
  $newInfo.data('date', this.datePublished);
  $newInfo.find('time[pubdate]').attr('title', this.datePublished);
  $newInfo.find('time').html('about ' + parseInt((new Date() - new Date (this.datePublished))/60/60/24/1000) + 'days ago');

  $newInfo.append('<hr>');

  $newInfo.removeClass('portProjects');

  return $newInfo;
};

rawData.sort(function(a,b){
  return(new Date(b.datePublished)) - (new Date(a.datePublished));
});



function JobsWorked(jobs){
  this.company = jobs.company;
  this.jobTitle = jobs.jobTitle;
  this.dateStarted = jobs.dateStarted;
  this.dateEnded = jobs.dateEnded;
  this.jobDescript = jobs.jobDescript;
  this.jobPublished = jobPublished;
}

JobsWorked.prototype.toHTML = function () {
  var $newJob = ('article','portJobs').clone();

  $newJob.data('company', this.company);
  $newJob.data('jobTitle', this.jobTitle);
  $newJob.data('dateStarted', this.dateStarted);
  $newJob.data('dateEnded', this.dateEnded);
  $newJob.data('jobDescript', this.jobDescript);
  $newJob.data('jobPublished', this.jobPublished);
  $x
  $newJob.append('<hr>');

  $newJob.removeClass('portJobs');
  return $newJob;
};

jobData.sort(function(a,b){
  return(new Date(b.)
});
