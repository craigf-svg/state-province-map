package main

import (
	"fmt"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
)

var mysqlDB *sqlx.DB

func initMySQL() {
	host := os.Getenv("HOST")
	user := os.Getenv("USER_NAME")
	pass := os.Getenv("PASSWORD")
	dbname := os.Getenv("DB_NAME")
	port := os.Getenv("PORT")
	if port == "" {
		port = "3306"
	}

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?parseTime=true&charset=utf8mb4,utf8&loc=Local", user, pass, host, port, dbname)
	mysqlDB, err := sqlx.Open("mysql", dsn)
	if err != nil {
		log.Fatalf("error opening DB: %v", err)
	}
	if err = mysqlDB.Ping(); err != nil {
		log.Fatalf("error pinging DB: %v", err)
	}
}
