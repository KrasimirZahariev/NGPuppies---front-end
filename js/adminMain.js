$(document).ready(function() {

    //CREATE NEW ADMIN
    $('#show-create-admin-form').click(function() {
        createAdminForm();
    });

    
    //CREATE NEW CLIENT
        //THE SAME
    $('#show-create-user-form').click(function() {
        createUserForm();
    });


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
            console.log(data)
            displayUsersForm(data)
        });
    });

    //FORM CREATE BILL

    $('#show-create-bill-form').click(function () {

        var subscribers = [];
        var services = [];
        var currencies = [];

        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/admin/subscribers/',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : localStorage.getItem("token")
            }
        }).done(function(subscribersData) {
            subscribers = subscribersData;

            $.ajax({
                type: 'GET',
                url: 'http://localhost:8080/admin/services/',
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : localStorage.getItem("token")
                }
            }).done(function(servicesData) {
                services = servicesData;

                $.ajax({
                    type: 'GET',
                    url: 'http://localhost:8080/admin/currencies/',
                    headers: {
                        "Content-Type" : "application/json",
                        "Authorization" : localStorage.getItem("token")
                    }
                }).done(function(currenciesData) {
                    currencies = currenciesData;

                    displayCreateBillForm(subscribers, services, currencies);
                });  

            });
      
        });
        
    

        
    });
    

    // LOGOUT FUNCTIONALITY

    $('#logout').click(function (){
        
        localStorage.clear();
        window.location.href = "/login.html";
    });    

});