<?php
require_once __DIR__ . '/../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$host = $_ENV['HOST'];
$user = $_ENV['USER_NAME'];
$password = $_ENV['PASSWORD'];
$dbname = $_ENV['DB_NAME'];

if (!$host || !$user || !$password || !$dbname) {
    die('Some or all required environment variables are missing, see .env-example for more info.');
}

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) { 
    die("Connection failed: " . $conn->connect_error); 
}