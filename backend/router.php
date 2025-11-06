<?php
    $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if ($path !== '/' && file_exists(__DIR__ . $path)) return false;
    if ($path === '/api/getStates') { require_once __DIR__ . '/api/getStates.php'; exit; }
    if ($path === '/api/getProvinces') { require_once __DIR__ . '/api/getProvinces.php'; exit; }
    return false;