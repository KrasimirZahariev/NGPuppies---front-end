    //UNPAID BILLS

$('#unpaid-bills').click(function (ev) {
    ev.preventDefault();
    
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/client/bills/unpaid/',
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : localStorage.getItem("token")
        }
    }).done(function (header) {
        //load results
    });
});

    //PAY BILLS

$('#pay').click(function (ev) {
    ev.preventDefault();
    
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/client/bills/pay/',
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : localStorage.getItem("token")
        },
        body: {
            //List of the ids of the bills
        }
    }).done(function (header) {
        //load results
    });
});

    // GET SUBSCRIBER

$('#get-subscriber').click(function (ev) {
    ev.preventDefault();

    let subscriberId = null;
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/client/subscribers/' + subscriberId + "/",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : localStorage.getItem("token")
        }
    }).done(function (header) {
        //load results
    });
});

    // GET PAYMENTS DESCENDING

$('#payments-descending').click(function (ev) {
    ev.preventDefault();
    
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/client/bills/payments-descending/',
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : localStorage.getItem("token")
        }
    }).done(function (header) {
        //load results
    });
});

    //MAX AND AVG IN TIME PERIOD

$('#max-and-avg').click(function (ev) {
    ev.preventDefault();

    let subscriberId = null;
    let startDate = null;
    let endDate = null;
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/client/bills/' + subscriberId + "/" + startDate + "," + endDate + "/",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : localStorage.getItem("token")
        }
    }).done(function (header) {
        //load results
    });
});

    //SERVICES SUBSCRIBER HAS PAID FOR

$('#sub-paid-services').click(function (ev) {
    ev.preventDefault();
    
    let subscriberId = null;
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/client/bills/paid-services/' + subscriberId + "/",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : localStorage.getItem("token")
        }
    }).done(function (header) {
        //load results
    });
});

    //TEN BIGGEST PAYMENTS

$('#top-payments').click(function (ev) {
    ev.preventDefault();
    
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/client/bills/top-payments/',
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : localStorage.getItem("token")
        }
    }).done(function (header) {
        //load results
    });
});

    //RECENT PAYMENTS

$('#recent-payments').click(function (ev) {
    ev.preventDefault();
    
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/client/bills/recent-payments/',
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : localStorage.getItem("token")
        }
    }).done(function (header) {
        //load results
    });
});