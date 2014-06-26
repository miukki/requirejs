define(function(){

  function render(parameters){
      var appDiv = document.getElementById('add');
      appDiv.innerHTML = '<div class="form-group"><input id="user-name" class="form-control" placeholder="add to list.." /></div><div class="form-group ml-sm"><button class="btn btn-default" id="button">add</button></div>';
  }

  return {
      render: render
  };

});
