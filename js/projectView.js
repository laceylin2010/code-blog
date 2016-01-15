var projectView = {};

projectView.initIndexPage = function(){
  console.log('initIndexPage start');
  Project.all.forEach(function(a){
    $('#myCoolStuff').append(a.toHTML());
  });
};
