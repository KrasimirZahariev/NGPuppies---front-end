function generateTopPayersForm(topPayers) {

  var generatedTopPayers = [];

    topPayers.forEach(payer => {
        generatedTopPayers.push(
            "<tr>"+
                "<td>"+payer.phoneNumber+"</td>"+
                "<td>"+payer.firstName+"</td>"+
                "<td>"+payer.lastName+"</td>"+
                "<td>"+(payer.summ)+"</td>"+
                "<td>"+payer.currency+"</td>"+
            " </tr>"
        );  
    });

  var topPayersFragment = generatedTopPayers.join("");

  $('main').html(
    '<div>'+
    '    <div class="container">'+
    '        <br><br>'+
    '        <h1>Top 10 Payers</h1>'+
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
    '                            <th>Total paid</th>'+
    '                            <th>Currency</th>'+
    '                        </thead>'+
    '                        <tbody id="myTable">' + topPayersFragment + '</tbody>'+
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