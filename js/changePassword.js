function changePassword() {

    $('main').html(
        '<div class="limiter">'+
        '    <div class="container-login100">'+
        '        <div class="wrap-login100 p-t-50 p-b-90">'+
        '            <form class="login100-form validate-form flex-sb flex-w">'+
        '				<span class="login100-form-title p-b-51">This is your first login please change your password</span>'+

        '                <div class="wrap-input100 validate-input m-b-16">'+
        '                    <input class="input100" type="password" placeholder="Password" id="passInput">'+
        '                    <span class="focus-input100"></span>'+
        '                </div>'+

        '                <div class="container-login100-form-btn m-t-17">'+
        '                    <button class="login100-form-btn" id="change-btn">Change</button>'+
        '                </div>'+
        '            </form>'+
        '        </div>'+
        '    </div>'+
        '</div>'
    );
    
}

$(document).ready(function(){
    $('main').on('click', '#change-btn', function(ev){
        ev.preventDefault();
        var password = $('#passInput').val();
        console.log("AAAAA")
    
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/change-password/',
            headers: {
                "Content-Type": "application/json",
                "Authorization" : localStorage.getItem("token")
            },
            data: JSON.stringify({
                "password": password
            })
        }).done(function () {
            new Noty({
                text: "Password successfully changed !",
                layout: 'topCenter',
                type: 'success',
                theme: 'nest',
                timeout: 3000
            }).show();
            generateLoginForm();
        });
        
    });

});

function generateLoginForm(){
    $('main').html(
        '<div class="limiter">'+
        '    <div class="container-login100">'+
        '        <div class="wrap-login100 p-t-50 p-b-90">'+
        '            <form class="login100-form validate-form flex-sb flex-w">'+
        '                <span class="login100-form-title p-b-51">Login</span>'+

        '                <div class="wrap-input100 validate-input m-b-16">'+
        '                    <input class="input100" type="text" placeholder="Username" id="usernameInput">'+
        '                    <span class="focus-input100"></span>'+
        '                </div>'+

        '                <div class="wrap-input100 validate-input m-b-16">'+
        '                    <input class="input100" type="password" placeholder="Password" id="passInput">'+
        '                    <span class="focus-input100"></span>'+
        '                </div>'+

        '                <div class="container-login100-form-btn m-t-17">'+
        '                    <button class="login100-form-btn" id="login-btn">Login</button>'+
        '                </div>'+
        '            </form>'+
        '        </div>'+
        '    </div>'+
        '</div>'
    );
}