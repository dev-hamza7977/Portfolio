<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST["name"];
    $mobile = $_POST["mobile"];
    $message = $_POST["message"];

    // Append the data to a CSV file
    $data = array($name, $mobile, $message);
    $file = fopen("data.csv", "a");
    fputcsv($file, $data);
    fclose($file);

    // Redirect the user to a thank-you page
    header("Location: thankyou.html");
    exit;
}
?>

