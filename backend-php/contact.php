<?php
// contact.php — receives the contact form submission and saves it to your MySQL database

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://yourdomain.com'); // TODO: replace with your real domain
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// ---- Database credentials ----
// TODO: fill these in with the values from your EasyHost "Databases" section
$host = 'localhost';
$db   = 'YOUR_DATABASE_NAME';
$user = 'YOUR_DATABASE_USER';
$pass = 'YOUR_DATABASE_PASSWORD';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8mb4", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database connection failed']);
    exit;
}

// ---- Read the submitted form data ----
$data = json_decode(file_get_contents('php://input'), true);

$name    = trim($data['name'] ?? '');
$email   = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

// ---- Basic validation ----
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address']);
    exit;
}

// ---- Save to database ----
$stmt = $pdo->prepare(
    "INSERT INTO contact_submissions (name, email, message, submitted_at) VALUES (:name, :email, :message, NOW())"
);
$stmt->execute([
    ':name'    => $name,
    ':email'   => $email,
    ':message' => $message,
]);

echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been received.']);
