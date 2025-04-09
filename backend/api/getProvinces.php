<?php
include_once('../db/db.php');

$result = $conn->query("SELECT *, 
    ROUND(density) AS density,
    ROUND(land_mass) AS land_mass 
    FROM provinces ORDER BY land_mass DESC
    ");
$rows = array();
while ($row = $result->fetch_assoc()) {
    $rows[] = $row;
}
echo json_encode($rows);
?>