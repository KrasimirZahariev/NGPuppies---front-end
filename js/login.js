$(document).ready(function() {
    
    $('#login-btn').click(function (ev) {
        ev.preventDefault();
        var username = $('#usernameInput').val();
        var password = $('#passInput').val();
        var auth = null;
        var role = null;

        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/login',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify({
                "username": username,
                "password": password
            })
        }).done(function (body) {
            auth = body["Authorization"];
            localStorage.setItem("token", auth);
            role = body["Role"];
            if(role === "ROLE_USER") {
                window.location.href = "/user.html";
                test();
            } else if(role === "ROLE_ADMIN") {
                window.location.href = "/admin.html";
            } else {
                changePassword();
            }
        }).fail(function (xhr) {
            new Noty({
                text: 'ERROR [' + xhr['status'] + ']: ' + xhr['responseText'],
                layout: 'topCenter',
                type: 'error',
                theme: 'metroui',
                timeout: 3000
            }).show();
        });
    });
    
}); 
