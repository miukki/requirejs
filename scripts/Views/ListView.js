define(function(){
    function render(parameters){
        var appDiv = document.getElementById('list');
        var users = parameters.users;
        var html = '<div class="btn-group-vertical col-md-6">';

        for (var i = 0, len = users.length; i < len; i++){
            html += '<button type="button" class="btn btn-default">' + users[i].name + '</button>';
        }
        html += '</div>';
        appDiv.innerHTML = html;
    }

    return {
        render: render
    };
});
