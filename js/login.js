$(document).ready(function() {
    
    let auth = null;
    let role = null;
    $('#login-btn').click(function (ev) {
    ev.preventDefault();
    let username = $('#usernameInput').val();
    let password = $('#passInput').val();

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
