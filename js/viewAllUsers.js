function displayUsersForm(data) {

	var rows = [];
	data.forEach(user => {
		rows.push("<tr><td>"+user.userId+"</td><td>"+user.username+"</td><td>"+"******"+"</td><td>"+user.eik+
		"</td><td>"+user.authorities[0].role+"</td><td><a class='edit'title='Edit'data-toggle='tooltip'>" + 
		"<i class='material-icons'>&#xE254;</i></a><a class='add'title='Add'data-toggle='tooltip'>"+
		"<i class='material-icons'>&#xE03B;</i></a><a class='delete'title='Delete'data-toggle='tooltip'>"+
		"<i class='material-icons'>&#xE872;</i></a></td></tr>");

	});

	var result = rows.join('');

	var form = "<div class='container'id='editDeleteUser'><div class='table-wrapper'><div class='table-title'>"+
	"<div class='row'><div class='col-sm-8'><h2>User <b>Details</b></h2></div></div></div>"+
	"<table class='table table-bordered'><thead><tr><th>User ID</th><th>Username</th>"+
	"<th>Password</th><th>EIK</th><th>Role</th><th>Actions</th></tr></thead><tbody>"+result+"</tbody></table></div></div>";

	
	$('main').html(form);       
}

$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	var actions = $("table td:last-child").html();
	// Append table with add row form on add new button click
    $(".add-new").click(function(){
		$(this).attr("disabled", "disabled");
		var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="name" id="name"></td>' +
            '<td><input type="text" class="form-control" name="department" id="department"></td>' +
            '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
			'<td>' + actions + '</td>' +
        '</tr>';
    	$("table").append(row);		
		$("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
	});
	
	// Add row on add button click
	$(document).on("click", ".add", function(){

		var empty = false;
		var input = $(this).parents("tr").find('input[type="text"]');
		var userId = $(this).closest('tr').find('td:eq(0)').text();
		var editedUser = [];
		
		editedUser.push(userId);		

        input.each(function(){
			if(!$(this).val()){
				$(this).addClass("error");
				empty = true;
			} else{
				//THE EDDITED VALUES!!!!
				editedUser.push($(this).val());
                $(this).removeClass("error");
            }
		});
		
		$(this).parents("tr").find(".error").first().focus();
		if(!empty){
			input.each(function(){
				$(this).parent("td").html($(this).val());
			});			
			$(this).parents("tr").find(".add, .edit").toggle();
			$(".add-new").removeAttr("disabled");
			//MAKE POST REQUEST TO UPDATE USER
			updateUser(editedUser);
		}
	});

	function updateUser(editedUser) {
		
		var pass = editedUser[2];

		var User = {
			"userId" : editedUser[0],
            "username" : editedUser[1],
            "password" : pass,
            "eik" : editedUser[3], 
			"role" : editedUser[4]
        }
		$.ajax({
			type: 'PUT',
			url: 'http://localhost:8080/admin/users/update/',
			headers: {
				"Content-Type" : "application/json",
				"Authorization" : localStorage.getItem("token")
			},
			data: JSON.stringify(User)
		}).done(function() {
            new Noty({
                text: "User successfully updaited !",
                layout: 'topCenter',
                type: 'success',
                theme: 'nest',
                timeout: 3000
            }).show();
        }).fail(function (xhr) {
            new Noty({
                text: 'ERROR [' + xhr['status'] + ']: ' + xhr['responseText'],
                layout: 'topCenter',
                type: 'error',
                theme: 'metroui',
                timeout: 3000
            }).show();   
        });

	}

	
	// Edit row on edit button click
	$(document).on("click", ".edit", function(){
        $(this).parents("tr").find("td:not(:first-child, :last-child, td:eq(2))").each(function(){
			$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
		});		
		$(this).parents("tr").find(".add, .edit").toggle();
		$(".add-new").attr("disabled", "disabled");
		
	});
	
	// Delete row on delete button click
	$(document).on("click", ".delete", function(){

		$(this).parents("tr").remove();

		var userId = $(this).closest('tr').find('td:eq(0)').text();

		$.ajax({
			type: 'DELETE',
			url: 'http://localhost:8080/admin/users/delete/' + userId + '/',
			headers: {
				"Content-Type" : "application/json",
				"Authorization" : localStorage.getItem("token")
			},
		}).done(function() {
            new Noty({
                text: "User successfully deleted !",
                layout: 'topCenter',
                type: 'success',
                theme: 'nest',
                timeout: 3000
            }).show();
        }).fail(function (xhr) {
            new Noty({
                text: 'ERROR [' + xhr['status'] + ']: ' + xhr['responseText'],
                layout: 'topCenter',
                type: 'error',
                theme: 'metroui	',
                timeout: 3000
            }).show();   
		});
		
		$(".add-new").removeAttr("disabled");
	});


	
});