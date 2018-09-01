    //GET USER BY USERNAME

$('#get-user').click(function (ev) {
    ev.preventDefault();
    
    let username = null;
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/admin/users/' + username + "/",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : localStorage.getItem("token")
        }
    }).done(function (header) {
        //load results
    });
});

    //CREATE USER

$('#create-user').click(function (ev) {
    ev.preventDefault();
    
    let username = null;
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/admin/users/create/',
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : localStorage.getItem("token")
        },
        body: {
            
        }
    }).done(function (header) {
        //load results
    });
});

    //UPDATE USER

$('#update-user').click(function (ev) {
    ev.preventDefault();
    
    let user = null;
    $.ajax({
        type: 'PUT',
        url: 'http://localhost:8080/admin/users/update/',
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : localStorage.getItem("token")
        },
        body: {
            //user
        }
    }).done(function (header) {
        //load results
    });
});

    //GET ALL USERS

$('#get-users').click(function (ev) {
    ev.preventDefault();
    
    let username = null;
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/admin/users/',
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : localStorage.getItem("token")
        }
    }).done(function (header) {
        //load results
    });
});

    // CREATE BILL

$('#create-bill').click(function (ev) {
    ev.preventDefault();
    
    let bill = null;
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/bills/create/',
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : localStorage.getItem("token")
        },
        body: {
            //bill
        }
    }).done(function (header) {
        //load results
    });
});
