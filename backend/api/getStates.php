<?php 
    include_once('../db/db.php');

    $result = $conn->query("SELECT *, ROUND(land_mass) AS land_mass FROM states ORDER BY land_mass DESC");
    $rows = array();
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
    echo json_encode($rows);
?>