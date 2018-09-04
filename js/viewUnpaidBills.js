function generateUnpaidBillsForm(unpaidBills) {

    var generatedBills = [];

    unpaidBills.forEach(bill => {
        generatedBills.push(
            "<tr>"+
                "<td><input type='checkbox' class='checkthis' /></td>"+
                "<td id='billId'>"+bill.billId+"</td>"+
                "<td>"+bill.firstName+"</td>"+
                "<td>"+bill.lastName+"</td>"+
                "<td>"+bill.phoneNumber+"</td>"+
                "<td>"+bill.service+"</td>"+
                "<td>"+(bill.amount)+"</td>"+
                "<td>"+bill.currency+"</td>"+
                "<td>"+bill.startDate+"</td>"+
                "<td>"+bill.endDate+"</td>"+
            " </tr>"
        );  
    });

    var billsFragment = generatedBills.join("");

    $('main').html(
       " <div class='container' id='payBills'>"+
       "     <div class='row'>"+
       "         <div class='col-md-12'>"+
       "             <div class='table-responsive'>"+
       "                 <table id='mytable' class='table table-bordred table-striped'>"+
       "                     <thead>"+
       "                         <th><input type='checkbox' id='checkall' /></th>"+
       "                         <th>Bill ID</th>"+
       "                         <th>First Name</th>"+
       "                         <th>Last Name</th>"+
       "                         <th>Phone Number</th>"+
       "                         <th>Service</th>"+
       "                         <th>Amount</th>"+
       "                         <th>Currency</th>"+
       "                         <th>Start Date</th>"+
       "                         <th>End Date</th>"+
       "                     </thead>"+
                           
       "                     <tbody>"+ billsFragment + "</tbody>"+

       "                 </table>"+
       "                 <button type='submit' class='button' id='pay-btn'>Pay</button>"+
       "             </div>"+
       "         </div>"+
       "     </div>"+
       " </div>"
    );

    //SELECt ALL CHECKBOXES FUNCTIONALITY

    $('#mytable #checkall').click(function() {
        if ($('#mytable #checkall').is(':checked')) {
            $('#mytable input[type=checkbox]').each(function() {
                $(this).prop('checked', true);
            });

        } else {
            $('#mytable input[type=checkbox]').each(function() {
                $(this).prop('checked', false);
            });
        }
     });    
    $('[data-toggle=tooltip]').tooltip();

    //PAY BTN FUNCTIONALITY

    var billsIds = [];
    $('main').on('click', '#pay-btn', function() {
        $.each($('#mytable input[type=checkbox]:checked').closest('td').next('td'), function() {
                billsIds.push($(this).text());
        });

        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/client/bills/pay/',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : localStorage.getItem("token")
            },
            data: JSON.stringify(billsIds)
        }).done(function() {
            alert("Bills paid !");   
        });
    });
        
}

