requirejs.config({
//enforceDefine: true,
  paths: {
    addController: 'Controllers/addController',
    listController: 'Controllers/ListController',
    jquery: '../bower_components/jquery/dist/jquery'

  }
});


require(['Router'], function(router){

 //addController.start();
 //listController.start();
 router.startRouting();

});	
