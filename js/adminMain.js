$(document).ready(function() {

    //CREATE NEW ADMIN
    var user = null;
    var pass = null;
    $('#show-create-admin-form').click(function generateNewAdminForm(){
        $('body').append(
            "<div class='col col-form-label'>",
            " <div class='container'>",
            "    <div class='card card-outline-secondary'>",
            "         <div class='card-header'>",
            "             <h3 class='mb-0'>Create new Admin</h3>",
            "         </div>",
            
            "         <div class='form-group row'>",
            "             <label class='col-lg-3 col-form-label form-control-label'>Username</label>",
            "             <div class='col-lg-9'>",
            "                 <input class='form-control' type='text' id='usernameInput' placeholder='Username'>",
            "             </div>",
            "         </div>",
                    
            "         <div class='form-group row'>",
            "             <label class='col-lg-3 col-form-label form-control-label'>Password</label>",
            "             <div class='col-lg-9'>",
            "                 <input class='form-control' type='password' id='passInput' placeholder='Password'>",
            "             </div>",
            "         </div>",

            "         <div class='form-group row'>",
            "             <label class='col-lg-3 col-form-label form-control-label'>EIK</label>",
            "             <div class='col-lg-9'>",
            "                 <input class='form-control' type='number' id='eikInput' placeholder='EIK'>",
            "             </div>",
            "         </div>",

            "         <div class='form-group row'>",
            "             <label class='col-lg-3 col-form-label form-control-label'></label>",
            "             <div class='col-lg-9'>",
            "                 <input type='reset' class='btn btn-secondary' value='Cancel'>",
            "                 <input type='button' class='btn btn-primary' id='createAdmin' value='Create'>",
            "             </div>",
            "         </div>",
            "     </div>",
            "    </div>",
            "   </div>",
            " </div>"
        );
    });

    $('body').on('click', '#createAdmin', function createAdmin(){
        //ev.preventDefault();
        user = $('#usernameInput').val();
        pass = $('#passInput').val();
        
        var User = {
            "username" : user,
            "password" : pass,
            "eik" : "111", 
            "authorities" : [{
                "role" : "ROLE_ADMIN"
            }]
        }

        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/admin/users/create/',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : localStorage.getItem("token")
            },
            data: JSON.stringify(User)
        }).done(function () {
            console.log("admin created!");
            alert("Admin created !");
        });
    });


    //CREATE NEW CLIENT
        //THE SAME



    //FORM VIEW ALL USERS
    
    $('#show-users').click(function getUsers(){

        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/admin/users/',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : localStorage.getItem("token")
            }
        }).done(function(data) {
            console.log(data[0].username);
            displayUsers(data)
        });
    });

    function displayUsers(data) {

            var rows = [];
            data.forEach(user => {
                rows.push("<tr><td>"+user.userId+"</td><td>"+user.username+"</td><td>"+"*****"+"</td><td>"+user.eik+"</td><td>"+user.authorities[0].role+"</td><td><a class='edit'title='Edit'data-toggle='tooltip'><i class='material-icons'>&#xE254;</i></a><a class='add'title='Add'data-toggle='tooltip'><i class='material-icons'>&#xE03B;</i></a><a class='delete'title='Delete'data-toggle='tooltip'><i class='material-icons'>&#xE872;</i></a></td></tr>");

            });

            var result = rows.join('');

            var str = "<div class='container'id='editDeleteUser'><div class='table-wrapper'><div class='table-title'><div class='row'><div class='col-sm-8'><h2>User<b>Details</b></h2></div></div></div><table class='table table-bordered'><thead><tr><th>UserId</th><th>Username</th><th>Password</th><th>EIK</th><th>Role</th><th>Actions</th></tr></thead><tbody>"+result+"</tbody></table></div></div>";

            $('body').append(str);
            console.log(str);

            // $('body').append(
            //     "<div class='container' id='editDeleteUser'>",
            //     "   <div class='table-wrapper'>",
            //     "        <div class='table-title'>",
            //     "            <div class='row'>",
            //     "                <div class='col-sm-8'><h2>User <b>Details</b></h2></div>",
            //     "            </div>",
            //     "        </div>",
            //     "        <table class='table table-bordered'>",
            //     "            <thead>",
            //     "                <tr>",
            //     "                    <th>User Id</th>",
            //     "                    <th>Username</th>",
            //     "                    <th>Password</th>",
            //     "                    <th>EIK</th>",
            //     "                    <th>Role</th>",
            //     "                    <th>Actions</th>",
            //     "                </tr>",
            //     "            </thead>",
            //     "            <tbody>",
                                
            //     "            </tbody>",
            //     "        </table>",
            //     "    </div>",
            //     "</div>"
            // )

        // data.forEach(user => {
        //     $('tbody').append(
        //         "<tr>",
        //         "   <td>" + user.userId + "</td>",
        //         "    <td>" + user.username + "</td>",
        //         "    <td>" + user.password + "</td>",
        //         "    <td>" + user.eik + "</td>",
        //         "    <td>" + user.authorities[0].role + "</td>",

        //         "    <td>",
        //         "        <a class='edit' title='Edit' data-toggle='tooltip'><i class='material-icons'>&#xE254;</i></a>",
        //         "        <a class='add' title='Add' data-toggle='tooltip'><i class='material-icons'>&#xE03B;</i></a>",
        //         "        <a class='delete' title='Delete' data-toggle='tooltip'><i class='material-icons'>&#xE872;</i></a>",
        //         "    </td>",
        //         "</tr>"
        //     );    
        // });
        
    }

});