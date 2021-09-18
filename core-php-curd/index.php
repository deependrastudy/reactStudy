<?php 
include('connection.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://cdn.datatables.net/1.11.2/css/dataTables.bootstrap4.min.css"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdn.datatables.net/1.11.2/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.11.2/js/dataTables.bootstrap4.min.js"></script>
    <title>Curd</title>
</head>
<body>
    <div class="container">
    <div class="row">
        <div class="col-sm-12">
            <div class="card">
                <div class="card-header"><a data-toggle="modal" data-target="#myModal" href="#" class="btn btn-info">Add</a></div>
                <div class="card-body">
                    <?php 
                    $query = "select * from users order by id desc";
                    $resp  = mysqli_query($conn,$query);
                    ?>
                    <table id="example" class="table table-striped table-bordered" style="width:100%">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        <?php 
                        $i=1;
                        while($row = mysqli_fetch_array($resp)) {
                        ?>
                        <tr>
                            <td><?php echo $i; ?></td>
                            <td><?php echo $row['name']; ?></td>
                            <td><?php echo $row['email']; ?></td>
                            <td><?php echo $row['mobile']; ?></td>
                            <td>
                                <a href="#" class="btn btn-ifno">Edit</a>
                                <a href="delete.php?id=<?php echo $row['id'] ?>" class="btn btn-denger">Delete</a>
                            </td>
                        </tr>
                        <?php
                        $i++;
                        }
                        ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </div>
    <!-- The Modal -->
    <div class="modal" id="myModal">
        <div class="modal-dialog">
        <div class="modal-content">
    
            <!-- Modal Header -->
            <div class="modal-header">
            <h4 class="modal-title">Add User</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
    
            <!-- Modal body -->
            <div class="modal-body">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text"  id="name" class="form-control">
                </div>
                <div class="form-group">
                    <label>E-Mail</label>
                    <input type="email"  id="email" class="form-control">
                </div>
                <div class="form-group">
                    <label>Mobile Number</label>
                    <input type="text"  id="mobile" class="form-control">
                </div>
                <div class="form-group">
                    <button class="btn btn-info" id="adduser">Add</button>
                </div>
            </div>
    
            <!-- Modal footer -->
            <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
    
        </div>
        </div>
    </div>
</body>
</html>
<script>
    $(document).ready(function() {
        $('#example').DataTable();
    } );
    $(document).on('click','#adduser',function(){
        let name = $('#name').val();
        let email = $('#email').val();
        let mobile = $('#mobile').val();
        $.post('add.php',{name:name,email:email,mobile:mobile},function(fb){
            let resp = $.parseJSON(fb);
            if(resp.status=='true') {
                alert('User Successfully Added');
                window.location.reload();
            } else {
                alert('User Not Added Please Try Again');
            }
        })
    });
</script>