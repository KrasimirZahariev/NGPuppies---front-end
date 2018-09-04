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


    //RECENT PAYMNETS
    $('#show-recent-payments').click(function(){
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/client/bills/recent-payments/',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : localStorage.getItem("token")
            }
        }).done(function(recentPayments) {
            generateRecentPaymentsForm(recentPayments);
        });

    });   
    

});

