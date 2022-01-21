<?php
// Enter the Mail In Which You Want to Recieve The Email In the $to Section
  $to = "";
  $sub = "Generic Mail";
  $msg="Hello, This is Email Sent Using PHP";
  if (mail($to,$sub,$msg))
      echo "Your Mail is sent successfully.";
  else
      echo "Your Mail is not sent. Try Again.";
?> 