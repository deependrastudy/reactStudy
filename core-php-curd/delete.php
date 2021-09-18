<?php 
include('connection.php');
$query = "delete from users where id='".$_GET['id']."'";
$resp = mysqli_query($conn,$query);
header('Location:index.php');
?>