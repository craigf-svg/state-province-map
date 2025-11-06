<?php
namespace App;

require_once __DIR__ . '/../vendor/autoload.php';

use Dotenv\Dotenv;

class Database {
    private static $instance = null;
    private $conn;

    private function __construct() {
        $dotenv = Dotenv::createImmutable(__DIR__);
        $dotenv->load();

        $host = $_ENV['HOST'];
        $user = $_ENV['USER_NAME'];
        $password = $_ENV['PASSWORD'];
        $dbname = $_ENV['DB_NAME'];

        if (!$host || !$user || !$password || !$dbname) {
            die('Some or all required environment variables are missing, see .env-example for more info.');
        }

        $this->conn = new \mysqli($host, $user, $password, $dbname);

        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new Database();
        }
        return self::$instance;
    }

    public function getConnection() {
        return $this->conn;
    }
}

$conn = Database::getInstance()->getConnection();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");