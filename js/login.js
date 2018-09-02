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
                window.location.href = "/clientsNavBar.html";
                test();
            } else {
                window.location.href = "/adminsNavBar.html";
            }
        });
    });
    
}); 
