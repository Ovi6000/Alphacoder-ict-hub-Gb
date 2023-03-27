<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the submitted title and content
  $title = $_POST["title"];
  $content = $_POST["content"];

  // Open the file for writing
  $file = fopen("homework.txt", "a");

  // Write the title and content to the file
  fwrite($file, "Title: " . $title . "\n");
  fwrite($file, "Content: " . $content . "\n\n");

  // Close the file
  fclose($file);

  // Redirect the user back to the page
  header("Location: page2.html");
  exit;
}
?>

