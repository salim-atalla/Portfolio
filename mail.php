

<?php

/*
  In order to use this file, you should change index.html to index.php + 
  set the action attribute to "mail.php" in the contact form +
  set the method to POST
*/

  if ($_SERVER['REQUEST_METHOD'] === "POST") {

    // Test Validation
    if (isset($_POST['first-name']) && isset($_POST['last-name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message'])) {

      $firstName = $_POST['first-name'];
      $lastName = $_POST['last-name'];
      $email = $_POST['email'];
      $subject = $_POST['subject'];
      $message = $_POST['message'];

      if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $recipient = "youremail@gmail.com";
        $mailHeader = "From: " . $firstName . $lastName . " <" . $email . ">\r\n";
        mail($recipient, $subject, $message, $mailHeader) or die("Error!");
      }
    }
  }