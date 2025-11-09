package main

import (
	"fmt"
	"log"
	"os"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

var postgresDB *sqlx.DB

func initPostgres() {
	pgHost := os.Getenv("PG_HOST")
	pgUser := os.Getenv("PG_USER")
	pgPass := os.Getenv("PG_PASSWORD")
	pgDBName := os.Getenv("PG_DB_NAME")
	pgPort := os.Getenv("PG_PORT")
	if pgPort == "" {
		pgPort = "5432"
	}

	pgDSN := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		pgHost, pgPort, pgUser, pgPass, pgDBName)

	postgresDB, err := sqlx.Open("postgres", pgDSN)
	if err != nil {
		log.Fatalf("error opening PostgreSQL DB: %v", err)
	}
	if err = postgresDB.Ping(); err != nil {
		log.Fatalf("error pinging PostgreSQL DB: %v", err)
	}
}
