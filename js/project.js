Project.all = [];

function Project (projectInfo){
  this.title = projectInfo.title;
  this.titleUrl = projectInfo.titleUrl;
  this.author = projectInfo.author;
  this.publishedOn = projectInfo.publishedOn;
}

Project.prototype.toHTML = function(){
  // console.log('compiling toHTML...');
  var portfolioTemplate = $('#about-template').html();
  var compileTemplate = Handlebars.compile(portfolioTemplate);
  return compileTemplate(this);
};

Project.loadAll = function(projectData){
  // console.log('Loading all...');
  projectData.sort(function(a,b){
    return(new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
  projectData.forEach(function(ele){
    Project.all.push(new Project(ele));
  });
};

Project.fetchAll = function(){
  // console.log('inside Project.fetchAll()');
  if(localStorage.projectData) {
    // console.log('localStorage exists');
    Project.loadAll(JSON.parse(localStorage.projectData));
    projectView.initIndexPage();
  } else {
    // console.log('localStore doesnt exist');
    $.getJSON('/data/project.json', function(projectData){
      // console.log('inside Jason');
      Project.loadAll(projectData);
      localStorage.projectData = JSON.stringify(projectData);
      projectView.initIndexPage();
    });
  }
};
