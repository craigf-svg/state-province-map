package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
	"github.com/joho/godotenv"
)

var db *sqlx.DB

func main() {
	err1 := godotenv.Load()
	if err1 != nil {
		log.Println("Could not load .env file.")
	}

	host := os.Getenv("HOST")
	user := os.Getenv("USER_NAME")
	pass := os.Getenv("PASSWORD")
	dbname := os.Getenv("DB_NAME")
	port := os.Getenv("PORT")
	if port == "" {
		port = "3306"
	}

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?parseTime=true&charset=utf8mb4,utf8&loc=Local", user, pass, host, port, dbname)
	var err error
	db, err = sqlx.Open("mysql", dsn)
	if err != nil {
		log.Fatalf("error opening DB: %v", err)
	}
	if err = db.Ping(); err != nil {
		log.Fatalf("error pinging DB: %v", err)
	}

	http.HandleFunc("/api/getStates", withCORS(func(w http.ResponseWriter, r *http.Request) {
		query := `SELECT id, name, abbreviation, ROUND(density) AS density, ROUND(land_mass) AS land_mass 
              FROM states ORDER BY land_mass DESC`
		serveQueryJSONSqlx(w, r, query)
	}))

	http.HandleFunc("/api/getProvinces", withCORS(func(w http.ResponseWriter, r *http.Request) {
		query := `SELECT id, name, abbreviation, ROUND(density) AS density, ROUND(land_mass) AS land_mass FROM provinces ORDER BY land_mass DESC`
		serveQueryJSONSqlx(w, r, query)
	}))

	http.HandleFunc("/healthz", withCORS(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		_ = json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
	}))

	addr := ":8000"
	log.Printf("Go API server listening on %s", addr)
	log.Fatal(http.ListenAndServe(addr, nil))
}

func withCORS(h http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		h(w, r)
	}
}

type State struct {
	ID           int     `db:"id" json:"id"`
	Name         string  `db:"name" json:"name"`
	Abbreviation string  `db:"abbreviation" json:"abbreviation"`
	Density      float64 `db:"density" json:"density"`
	LandMass     float64 `db:"land_mass" json:"land_mass"`
}

func serveQueryJSONSqlx(w http.ResponseWriter, r *http.Request, query string) {
	if r.Method != http.MethodGet {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	var results []State

	if err := sqlx.Select(db, &results, query); err != nil {
		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
		log.Printf("query error: %v", err)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(results); err != nil {
		log.Printf("JSON encode error: %v", err)
	}
}
