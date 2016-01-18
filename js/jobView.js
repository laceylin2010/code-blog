var jobView = {};

jobView.initIndexPage = function(){
  Job.all.forEach(function(a){
    $('#work-history').append(a.toHTML());
  });
};
