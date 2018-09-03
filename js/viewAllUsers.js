function displayUsersForm(data) {

	var rows = [];
	data.forEach(user => {
		rows.push("<tr><td>"+user.username+"</td><td>"+"******"+"</td><td>"+user.eik+
		"</td><td>"+user.authorities[0].role+"</td><td><a class='edit'title='Edit'data-toggle='tooltip'>" + 
		"<i class='material-icons'>&#xE254;</i></a><a class='add'title='Add'data-toggle='tooltip'>"+
		"<i class='material-icons'>&#xE03B;</i></a><a class='delete'title='Delete'data-toggle='tooltip'>"+
		"<i class='material-icons'>&#xE872;</i></a></td></tr>");

	});

	var result = rows.join('');

	var form = "<div class='container'id='editDeleteUser'><div class='table-wrapper'><div class='table-title'>"+
	"<div class='row'><div class='col-sm-8'><h2>User <b>Details</b></h2></div></div></div>"+
	"<table class='table table-bordered'><thead><tr><th>Username</th>"+
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
		console.log("ADD CLICKED");
		var empty = false;
		var input = $(this).parents("tr").find('input[type="text"]');
		var editedUser = [];
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
		console.log(editedUser);
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
		
		var pass = editedUser[1];

		var User = {
            "username" : editedUser[0],
            "password" : pass,
            "eik" : editedUser[2], 
			"role" : editedUser[3]
        }
		console.log("Updated user - " + User);
		$.ajax({
			type: 'PUT',
			url: 'http://localhost:8080/admin/users/update/',
			headers: {
				"Content-Type" : "application/json",
				"Authorization" : localStorage.getItem("token")
			},
			data: JSON.stringify(User)
		}).done(function () {
			alert("user updated !");
		});

	}

	
	// Edit row on edit button click
	$(document).on("click", ".edit", function(){
		console.log("edit clicked");		
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
			$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
		});		
		$(this).parents("tr").find(".add, .edit").toggle();
		$(".add-new").attr("disabled", "disabled");
		
	});
	
	// Delete row on delete button click
	$(document).on("click", ".delete", function(){
		console.log("delete clicked");
		$(this).parents("tr").remove();
		$(".add-new").removeAttr("disabled");
		//deleteUser();
		//MAKE THE FUNCTION IN THE BACK END!
	});


	
});