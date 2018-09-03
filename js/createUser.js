function createUserForm() {
    $('main').html(
        "<div class='col col-form-label' id ='userForm'>" +
        " <div class='container'>" +
        "    <div class='card card-outline-secondary'>" +
        "         <div class='card-header'>" +
        "             <h3 class='mb-0'>Create new User</h3>" +
        "         </div>" +
        
        "         <div class='form-group row'>" +
        "             <label class='col-lg-3 col-form-label form-control-label'>Username</label>" +
        "             <div class='col-lg-9'>" +
        "                 <input class='form-control' type='text' id='usernameInput' placeholder='Username'>" +
        "             </div>" +
        "         </div>" +
                
        "         <div class='form-group row'>" +
        "             <label class='col-lg-3 col-form-label form-control-label'>Password</label>" +
        "             <div class='col-lg-9'>" +
        "                 <input class='form-control' type='password' id='passInput' placeholder='Password'>" +
        "             </div>" +
        "         </div>" +

        "         <div class='form-group row'>" +
        "             <label class='col-lg-3 col-form-label form-control-label'>EIK</label>" +
        "             <div class='col-lg-9'>" +
        "                 <input class='form-control' type='number' id='eikInput' placeholder='EIK'>" +
        "             </div>" +
        "         </div>" +

        "         <div class='form-group row'>" +
        "             <label class='col-lg-3 col-form-label form-control-label'></label>" +
        "             <div class='col-lg-9'>" +
        "                 <input type='reset' class='btn btn-secondary' value='Cancel'>" +
        "                 <input type='button' class='btn btn-primary' id='createUser' value='Create'>" +
        "             </div>" +
        "         </div>" +
        "     </div>" +
        "    </div>" +
        "   </div>" +
        " </div>"
    );
}

$(document).ready(function(){

    $('body').on('click', '#createUser', function(){
        var user = $('#usernameInput').val();
        var pass = $('#passInput').val();
        var eik = $('#eikInput').val();
        
        var User = {
            "username" : user,
            "password" : pass,
            "eik" : eik, 
            "role" : "ROLE_USER"
        }

        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/admin/users/create/',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : localStorage.getItem("token")
            },
            data: JSON.stringify(User)
        }).done(function () {
            $('#usernameInput').val("");
            $('#passInput').val("");
            $('#eikInput').val("");
            console.log("user created!");
            alert("User created !");
        });
    });
});