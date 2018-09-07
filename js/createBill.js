function displayCreateBillForm(subscribers, services, currencies) {
    
    // console.log(subscribers);
    var generatedSubscribers = [];
    subscribers.forEach(subscriber => {
        generatedSubscribers.push("<option>"+subscriber.phoneNumber+"</option>");    
    });
    var subscribersFragment = generatedSubscribers.join('');
    // console.log(generatedSubscribers);


    var generatedServices = [];
    services.forEach(service => {
        generatedServices.push("<option>"+service.service+"</option>");    
    });
    var servicesFragment = generatedServices.join('');


    var generatedCurrencies = [];
    currencies.forEach(currency => {
        generatedCurrencies.push("<option>"+currency.currency+"</option>");    
    });
    var currenciesFragment = generatedCurrencies.join('');


    var form = "<div class='col col-form-label' id='billForm'><div class='container'><div class='card'>"+
    "<div class='card-header'><h3&class='mb-0'>CREATE NEW BILL</h3></div><div class='card-body'>"+
    "<div class='form-group'><label for='exampleFormControlSelect1'class='col col-form-label'>"+
    "Subscriber</label><select class='form-control'id='SubscriberSelect'>"+subscribersFragment+"</select>"+
    "</div><div class='form-group'><label for='exampleFormControlSelect1'class='col col-form-label'>"+
    "Service</label><select class='form-control'placeholder='Service'id='ServiceSelect'>"+servicesFragment+"</select></div>"+
    "<div class='form-group'><label for='example-date-input'class='col col-form-label'>StartDate</label>"+
    "<div class='form'><input class='form-control'type='date'placeholder='StartDate'id='StartDate'></div>"+
    "</div><div class='form-group'><label for='example-date-input'class='col col-form-label'>EndDate</label>"+
    "<div class='form'><input class='form-control'type='date'placeholder='EndDate'id='EndDate'></div></div>"+
    "<div class='form-group'><label for='exampleFormControlSelect1'class='col col-form-label'>Currency</label>"+
    "<select class='form-control'id='CurrencySelect'>"+currenciesFragment+"</select></div><div class='form-group'>"+
    "<label for='example-number-input'class='col col-form-label'>Amount</label><div class='form'>"+
    "</div><input class='form-control'type='number'value='0'min='0'step='0.01'data-number-to-fixed='2'data-number-stepfactor='100'id='Amount'>"+
    "</div></div><div class='form-group'><label class='col col-form-label'></label><div class='col-lg-9'>"+
    "<input type='reset'class='btn btn-secondary'value='Cancel'><input type='button'class='btn btn-primary' id='createBill' value='Create'>"+
    "</div></div></form></div></div></div></div></div>";

    $('main').html(form);
}

$(document).ready(function() {
    
    $('body').on('click', '#createBill', function(){

        var bill = {
            "phoneNumber" : $('#SubscriberSelect option:selected').text(),
            "service" : $('#ServiceSelect option:selected').text(),
            "startDate" : $('#StartDate').val(),
            "endDate" : $('#EndDate').val(),
            "currency" : $('#CurrencySelect option:selected').text(),
            "amount" : $('#Amount').val()
        }

        console.log(bill);
        
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/admin/bills/create/',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : localStorage.getItem("token")
            },
            data: JSON.stringify(bill)
        }).done(function () {
            new Noty({
                text: "Bill successfully created !",
                layout: 'topCenter',
                type: 'success',
                theme: 'nest',
                timeout: 3000
            }).show();

            $('#StartDate').val("");
            $('#EndDate').val("");
            $('#Amount').val("");

        }).fail(function (xhr) {
            new Noty({
                text: 'ERROR [' + xhr['status'] + ']: ' + xhr['responseText'],
                layout: 'topCenter',
                type: 'error',
                theme: 'metroui',
                timeout: 3000
            }).show();   
        });

    });
});