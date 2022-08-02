<?php 
  if(!empty($_POST)) {
    $email = $_POST['femail'];
    $name = $_POST['fname'];
    $phone = $_POST['fphone'];
   
    
    $messageToSend = "Podaci učesnika nagradne igre:\n${name} - ${email}\n\nBroj telefona:\n${phone}";
    
    mail("megaevent.ba@gmail.com", "Nagradna igra", $messageToSend);
    header("Location: /");
  }
?>