define(['jquery', 'Views/AddView', 'Models/Task'], function($, AddView, User){

    function start(){

        $('#list').html('');
        AddView.render();
		bindEvents();
    }

	function bindEvents(){
        document.getElementById('button').addEventListener('click', function(){
            var users = localStorage.users ? JSON.parse(localStorage.users) : [];
            var userName = document.getElementById('user-name').value;
            users.push(new User(userName));
		    localStorage.setItem('users', JSON.stringify(users));
            localStorage.users = JSON.stringify(users);
            require(['Controllers/ListController'], function(ListController){
                ListController.start();
            });
        }, false);
    }

    return {
        start:start
    };
});
