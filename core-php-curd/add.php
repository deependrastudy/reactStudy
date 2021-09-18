<?php 
include('connection.php');
$query  = "insert into users (name,email,mobile) values ('".$_POST['name']."','".$_POST['email']."','".$_POST['mobile']."')";
$resp = mysqli_query($conn,$query);
if($resp) {
    echo json_encode(array('status'=>'true'));
} else {
    echo json_encode(array('status'=>'true'));
}
?>