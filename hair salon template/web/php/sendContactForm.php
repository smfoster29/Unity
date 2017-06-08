<?php
 
// Get values from form
$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$userMessage=$_POST['message'];
 
$to = "unityhairstudioloveland@gmail.com";
$subject = "Contact Request from " . $name;
$message = " Name: " . $name . "\r\n Email: " . $email . "\r\n Phone: " . $phone . "\r\n Message: " . $userMessage;
 
 
$from = "Unity Hair Studio Website <inquiry@unityhairstudio.us>";
$headers = "From:" . $from . "\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n"; 
 
if(@mail($to,$subject,$message,$headers))
{
  print "<script>document.location.href='../contactSuccess.html';</script>";
}else{
  print "<script>document.location.href='../contactFailure.html';</script>";
}
?>