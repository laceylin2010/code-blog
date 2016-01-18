(function(module){
  var employmentController = {};

  employmentController.index=function(){
    $('.nav-content').hide();
    $('#work-history').show();
  };

  Job.fetchAll();
  employmentController.index();

  module.employmentController = employmentController;

})(window);
