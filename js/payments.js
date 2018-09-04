function generatePaymentsForm(payments, requestType) {

  var generatedPayments = [];

    payments.forEach(payment => {
        generatedPayments.push(
            "<tr>"+
                "<td>"+payment.phoneNumber+"</td>"+
                "<td>"+payment.firstName+"</td>"+
                "<td>"+payment.lastName+"</td>"+
                "<td>"+payment.service+"</td>"+
                "<td>"+(payment.amount)+"</td>"+
                "<td>"+payment.currency+"</td>"+
                "<td>"+payment.paymentDate+"</td>"+
            " </tr>"
        );  
    });

  var paymentsFragment = generatedPayments.join("");

  $('main').html(
    '<div>'+
    '    <div class="container">'+
    '        <br><br>'+
    '        <h1>'+requestType+'</h1>'+
    '        <br>'+
    '        <input id="myInput" type="text" placeholder="Search..">'+
    '        <br><br>'+
    '        <div class="row">'+
    '            <div class="col-md-12">'+
    '                <div class="table-responsive">'+
    '                    <table class="table table-bordred table-striped">'+
    '                        <thead>'+
    '                            <th>Phone Number</th>'+
    '                            <th>First Name</th>'+
    '                            <th>Last Name</th>'+
    '                            <th>Service</th>'+
    '                            <th>Amount</th>'+
    '                            <th>Currency</th>'+
    '                            <th>Payment Date</th>'+
    '                        </thead>'+
    '                        <tbody id="myTable">' + paymentsFragment + '</tbody>'+
    '                    </table>'+
    '                </div>'+
    '            </div>'+
    '        </div>'+
    '    </div>'+
    '</div>'
  );

  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
}
