var projectView = {};

projectView.initIndexPage = function(){
  console.log('initIndexPage start');
  Project.all.forEach(function(a){
    $('#projects').append(a.toHTML());
  });
};
