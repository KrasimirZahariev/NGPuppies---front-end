$( document ).ready(function() {

    //UNPAID BILLS

    $('#show-unpaid-bills').click(function(){
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/client/bills/unpaid/',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : localStorage.getItem("token")
            }
        }).done(function(unpaidBills) {
            generateUnpaidBillsForm(unpaidBills);
        });

    });


    //TOP 10 RECENT PAYMNETS
    $('#show-recent-payments').click(function(){
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/client/bills/recent-payments/',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : localStorage.getItem("token")
            }
        }).done(function(recentPayments) {
            generatePaymentsForm(recentPayments, "10 Most Recent Payments");
        });

    });   
    
    //PAYMENTS HISTORY DESCENDING
    $('#show-payments-history-descending').click(function(){
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/client/bills/payments-descending/',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : localStorage.getItem("token")
            }
        }).done(function(paymentsHistoryDescending) {
            generatePaymentsForm(paymentsHistoryDescending, "Payment History");
        });

    });

    //TOP 10 BIGGEST PAYERS
    $('#show-top-payers').click(function(){
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/client/bills/top-payments/',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : localStorage.getItem("token")
            }
        }).done(function(topPayers) {
            generateTopPayersForm(topPayers);
        });

    });

    //MAX AND AVERAGE PAYMENTS IN A GIVEN TIME PERIOD
    $('#show-max-average-payments').click(function(){

        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/client/subscribers/',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : localStorage.getItem("token")
            }
        }).done(function(subscribers) {
            generateMaxAndAverageForSubscriberForm(subscribers);
        });

    });


    //SUBSCRIBER DETAILS
    $('#show-subscribers-details').click(function(){

        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/client/subscribers/',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : localStorage.getItem("token")
            }
        }).done(function(subscribers) {
            generateSubscribersForm(subscribers);
        });

    });


    // LOGOUT FUNCTIONALITY
    $('#logout').click(function (){
        localStorage.clear();
        window.location.href = "/login.html";
    });

});

