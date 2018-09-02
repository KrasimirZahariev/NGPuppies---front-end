$(document).ready(function() {

    //CREATE NEW ADMIN
    $('#show-create-admin-form').click(function() {
        createAdminForm();
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
            displayUsersForm(data)
        });
    });


    // LOGOUT FUNCTIONALITY

    $('#logout').click(function (){
        
        localStorage.clear();
        window.location.href = "/login.html";
    });    

});