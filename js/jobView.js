var jobView = {};

jobView.initIndexPage = function(){
  Job.all.forEach(function(a){
    $('#myCoolStuff2').append(a.toHTML());
  });
};
