define(['jquery', 'Views/ListView'], function($, ListView){

    function start(){
        $('#add').html('');
        var users = localStorage.users ? JSON.parse(localStorage.users) : [];
        ListView.render({users:users});
    }

    return {
        start: start
    };
});
