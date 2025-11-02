<?php
require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../db/db.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$result = $conn->query("SELECT *,
    ROUND(density) AS density,
    ROUND(land_mass) AS land_mass
    FROM provinces ORDER BY land_mass DESC
    ");
$rows = [];
while ($row = $result->fetch_assoc()) {
    $rows[] = $row;
}
echo json_encode($rows);