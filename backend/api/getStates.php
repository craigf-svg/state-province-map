<?php
require_once __DIR__ . '/../vendor/autoload.php';

use App\Database;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = Database::getInstance()->getConnection();
$result = $conn->query("SELECT *,
    ROUND(density) AS density,
    ROUND(land_mass) AS land_mass
    FROM states ORDER BY land_mass DESC
    ");
$rows = [];
while ($row = $result->fetch_assoc()) {
    $rows[] = $row;
}
echo json_encode($rows);
