requirejs.config({
//enforceDefine: true,
  paths: {
    addController: [
        'Controllers/addController'
    ]
  }
});


require(['Models/User', 'Controllers/ListController', 'addController'], function(User, ListController, addController){

  ListController.start();
  addController.start();

}, function(err) {

  var failedId = err.requireModules && err.requireModules[0];

  //for error handling
});
