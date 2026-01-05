<?php
require_once "config/db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Collect & sanitize input
    $full_name    = trim($_POST['full_name']);
    $email        = trim($_POST['email']);
    $phone_number = trim($_POST['phone_number']);
    $address      = trim($_POST['address']);
    $city         = trim($_POST['city']);
    $state        = trim($_POST['state']);

    // Prepare SQL statement
    $stmt = $conn->prepare(
        "INSERT INTO registrations_info 
        (full_name, email, phone_number, address, city, state)
        VALUES (?, ?, ?, ?, ?, ?)"
    );

    if (!$stmt) {
        die("Query preparation failed");
    }

    // Bind parameters
    $stmt->bind_param(
        "ssssss",
        $full_name,
        $email,
        $phone_number,
        $address,
        $city,
        $state
    );

    // Execute query
    if ($stmt->execute()) {
        header("Location: success.php");
        exit();
    } else {
        echo "Registration Failed";
    }

    $stmt->close();
}

$conn->close();
?>
