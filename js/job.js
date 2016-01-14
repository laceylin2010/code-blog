Job.all = [];

function Job(jobhistory){
  this.jobTitle = jobhistory.jobTitle;
  this.company = jobhistory.company;
  this.datesWorked = jobhistory.datesWorked;
  this.jobDescript = jobhistory.jobDescript;
}

Job.prototype.toHTML = function () {
  var employmentTemplate = $('#employment-template').html();
  var compileTemplate = Handlebars.compile(employmentTemplate);
  return compileTemplate(this);
};

Job.loadAll = function(jobData){
  jobData.forEach(function(ele){
    Job.all.push(new Job(ele));
  });
};

Job.fetchAll = function(){
  if(localStorage.jobData) {
    Job.loadAll(JSON.parse(localStorage.jobData));
    jobView.initIndexPage();
  } else {
    $.getJSON('/data/jobs.json', function(jobData){
      Job.loadAll(jobData);
      localStorage.jobData = JSON.stringify(jobData);
      jobView.initIndexPage();
    });
  }
};
