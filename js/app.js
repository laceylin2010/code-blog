// var portfolio = [];

function Info (info){
  this.title = info.title;
  this.url = info.url;
  this.author = info.author;
  this.datePublished = info.datePublished;
}

Info.prototype.toHTML = function () {
  var $newInfo = $('article.portProjects').clone();

  $newInfo.find('h1').text(this.title);
  $newInfo.find('url', this.url);
  $newInfo.find('author', this.author);
  $newInfo.find('date', this.datePublished);
  $newInfo.find('time[pubdate]').attr('title', this.datePublished);
  $newInfo.find('time').html('about ' + parseInt((new Date() - new Date (this.datePublished))/60/60/24/1000) + 'days ago');

  $newInfo.append('<hr>');

  $newInfo.removeClass('portProjects');

  return $newInfo;
};

rawData.sort(function(a,b){
  return(new Date(b.datePublished)) - (new Date(a.datePublished));
});


var jobData = [];

function JobsWorked(jobs){
  this.company = jobs.company;
  this.jobTitle = jobs.jobTitle;
  this.dateStarted = jobs.dateStarted;
  this.dateEnded = jobs.dateEnded;
  this.jobDescript = jobs.jobDescript;
  this.jobPublished = jobs.jobPublished;
}

JobsWorked.prototype.toHTML = function () {
  var $newJob = ('article','portJobs').clone();

  $newJob.find('portJobs h1').text(this.company);
  $newJob.data('jobTitle', this.jobTitle);
  $newJob.data('dateStarted', this.dateStarted);
  $newJob.data('dateEnded', this.dateEnded);
  $newJob.data('jobDescript', this.jobDescript);
  $newJob.data('jobPublished', this.jobPublished);
  $newJob.append('<hr>');

  $newJob.removeClass('portJobs');
  return $newJob;
};

jobData.sort(function(a,b){
  return(new Date(b.jobPublished)) - (new Date(a.jobPublished));
});

jobData.forEach(function(ele){
  jobData.push(new JobsWorked(ele));
});

jobData.forEach(function(a){
  $('#portfolio').apprend(a.toHTML());
});
