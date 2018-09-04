function generateSubscribersForm(subscribers) {

  var generatedSubscribers = [];

    subscribers.forEach(subscriber => {
        generatedSubscribers.push(
            "<tr>"+
                "<td>"+subscriber.phoneNumber+"</td>"+
                "<td>"+subscriber.firstName+"</td>"+
                "<td>"+subscriber.lastName+"</td>"+
                "<td>"+subscriber.egn+"</td>"+
            " </tr>"
        );  
    });

  var subscribersFragment = generatedSubscribers.join("");

  $('main').html(
    '<div>'+
    '    <div class="container">'+
    '        <br><br>'+
    '        <h1>Subscriber Details</h1>'+
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
    '                            <th>EGN</th>'+
    '                        </thead>'+
    '                        <tbody id="myTable">' + subscribersFragment + '</tbody>'+
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