function generateMaxAndAverageForSubscriberForm(subscribers) {
  
  var generatedSubscribers = [];
  subscribers.forEach(subscriber => {
    generatedSubscribers.push('<option>'+subscriber.phoneNumber+'</option>');  
  });
  var subscribersFragment = generatedSubscribers.join('');

  $('main').html(
    '<div>'+
    '  <div class="container">'+
    '      <br><br>'+
    '      <label>Subscriber</label>'+
    '      <select id="SubscriberSelect">' + subscribersFragment + '</select>' +
    '      <div class="setPeriod">'+
    '          <br>'+
    '          <div class="form">'+
    '              <input class="form-control" type="date" placeholder="Start Date" id="startDate">'+
    '          </div>'+
    '          <br>'+
    '          <label for="example-date-input" class="col col-form-label">End Date</label>'+
    '          <div class="form">'+
    '              <input class="form-control" type="date" placeholder="End Date" id="endDate">'+
    '          </div>'+
    '          <br>'+
    '          <button id="submit-btn" type="submit" class="button">Submit</button>'+
    '          <br>'+
    '      </div>'+
    '      <br><br><br>'+
    '  </div>'+
    '</div>'
  )

  $('main').on('click', '#submit-btn', function() {
    var subscriberId = $('#SubscriberSelect option:selected').text();
    var startDate = $('#startDate').val();
    var endDate = $('#endDate').val();
    $.ajax({
      type: 'GET',
      url: 'http://localhost:8080/client/bills/'+ 
          subscriberId + '/' + startDate + ',' + endDate,
      headers: {
          "Content-Type" : "application/json",
          "Authorization" : localStorage.getItem("token")
      }
    }).done(function(subscriberInfo) {
        generateSubscriberInfoForm(subscriberInfo, subscribersFragment);
    });

  });

}

function generateSubscriberInfoForm(subscriberInfo, subscribersFragment) {

  $('main').html(
    '<div>'+
    '  <div class="container">'+
    '      <br><br>'+
    '      <label>Subscriber</label>'+
    '      <select id="SubscriberSelect">' + subscribersFragment + '</select>' +
    '      <div class="setPeriod">'+
    '          <br>'+
    '          <div class="form">'+
    '              <input class="form-control" type="date" placeholder="Start Date" id="startDate">'+
    '          </div>'+
    '          <br>'+
    '          <label for="example-date-input" class="col col-form-label">End Date</label>'+
    '          <div class="form">'+
    '              <input class="form-control" type="date" placeholder="End Date" id="endDate">'+
    '          </div>'+
    '          <br>'+
    '      </div>'+
    '      <br><br><br>'+
    '      <div class="row">'+
    '          <div class="col-md-12">'+
    '              <div class="table-responsive">'+
    '                  <table class="table table-bordred table-striped">'+
    '                      <thead>'+
    '                          <th>Phone Number</th>'+
    '                          <th>First Name</th>'+
    '                          <th>Last Name</th>'+
    '                          <th>Average paid</th>'+
    '                          <th>Max paid</th>'+
    '                          <th>Currency</th>'+
    '                      </thead>'+
    '                      <tbody id="myTable">'+
    '                          <tr>'+
    '                            <td>'+subscriberInfo.phoneNumber+'</td>'+
    '                            <td>'+subscriberInfo.firstName+'</td>'+
    '                            <td>'+subscriberInfo.lastName+'</td>'+
    '                            <td>'+subscriberInfo.avg+'</td>'+
    '                            <td>'+subscriberInfo.max+'</td>'+
    '                            <td>'+subscriberInfo.currency+'</td>'+
    '                          </tr>'+
    '                      </tbody>'+
    '                  </table>'+
    '              </div>'+
    '          </div>'+
    '      </div>'+
    '  </div>'+
    '</div>'
  )  
}  
