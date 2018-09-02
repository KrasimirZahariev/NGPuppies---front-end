$(document).ready(function() {

    //CREATE NEW ADMIN
    var user = null;
    var pass = null;
    $('#show-create-admin-form').click(function generateNewAdminForm(){
        $('body').append(
            "<div class='col col-form-label'>",
            " <div class='container'>",
            "    <div class='card card-outline-secondary'>",
            "         <div class='card-header'>",
            "             <h3 class='mb-0'>Create new Admin</h3>",
            "         </div>",
            
            "         <div class='form-group row'>",
            "             <label class='col-lg-3 col-form-label form-control-label'>Username</label>",
            "             <div class='col-lg-9'>",
            "                 <input class='form-control' type='text' id='usernameInput' placeholder='Username'>",
            "             </div>",
            "         </div>",
                    
            "         <div class='form-group row'>",
            "             <label class='col-lg-3 col-form-label form-control-label'>Password</label>",
            "             <div class='col-lg-9'>",
            "                 <input class='form-control' type='password' id='passInput' placeholder='Password'>",
            "             </div>",
            "         </div>",

            "         <div class='form-group row'>",
            "             <label class='col-lg-3 col-form-label form-control-label'>EIK</label>",
            "             <div class='col-lg-9'>",
            "                 <input class='form-control' type='number' id='eikInput' placeholder='EIK'>",
            "             </div>",
            "         </div>",

            "         <div class='form-group row'>",
            "             <label class='col-lg-3 col-form-label form-control-label'></label>",
            "             <div class='col-lg-9'>",
            "                 <input type='reset' class='btn btn-secondary' value='Cancel'>",
            "                 <input type='button' class='btn btn-primary' id='createAdmin' value='Create'>",
            "             </div>",
            "         </div>",
            "     </div>",
            "    </div>",
            "   </div>",
            " </div>"
        );
    });

    $('body').on('click', '#createAdmin', function createAdmin(){
        //ev.preventDefault();
        user = $('#usernameInput').val();
        pass = $('#passInput').val();
        
        var User = {
            "username" : user,
            "password" : pass,
            "eik" : "111", 
            "authorities" : [{
                "role" : "ROLE_ADMIN"
            }]
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
            console.log("admin created!");
            alert("Admin created !");
        });
    });


    //CREATE NEW CLIENT
        //THE SAME



    //FORM VIEW ALL USERS
    
    $('#show-users').click(function getUsers(){

        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/admin/users/',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : localStorage.getItem("token")
            }
        }).done(function(data) {
            console.log(data[0].username);
            displayUsers(data)
        });
    });


});