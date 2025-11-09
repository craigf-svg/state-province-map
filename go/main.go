package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/jmoiron/sqlx"
	"github.com/joho/godotenv"
)

const headerContentType = "Content-Type"

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Println("Could not load .env file.")
	}

	initMySQL()

	initPostgres()

	http.HandleFunc("/api/getStates", withCORS(func(w http.ResponseWriter, r *http.Request) {
		query := `SELECT id, name, abbreviation, ROUND(density) AS density, ROUND(land_mass) AS land_mass 
              FROM states ORDER BY land_mass DESC`
		serveQueryJSONSqlxDB(w, mysqlDB, query)
	}))

	http.HandleFunc("/api/getProvinces", withCORS(func(w http.ResponseWriter, r *http.Request) {
		query := `SELECT id, name, abbreviation, ROUND(density) AS density, ROUND(land_mass) AS land_mass FROM provinces ORDER BY land_mass DESC`
		serveQueryJSONSqlxDB(w, mysqlDB, query)
	}))

	http.HandleFunc("/api/getStatesPg", withCORS(func(w http.ResponseWriter, r *http.Request) {
		query := `SELECT id, name, abbreviation, ROUND(density) AS density, ROUND(land_mass) AS land_mass 
	             FROM states ORDER BY land_mass DESC`
		serveQueryJSONSqlxDB(w, postgresDB, query)
	}))

	http.HandleFunc("/api/getProvincesPg", withCORS(func(w http.ResponseWriter, r *http.Request) {
		query := `SELECT id, name, abbreviation, ROUND(density) AS density, ROUND(land_mass) AS land_mass FROM provinces ORDER BY land_mass DESC`
		serveQueryJSONSqlxDB(w, postgresDB, query)
	}))

	http.HandleFunc("/healthz", withCORS(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set(headerContentType, "application/json")
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
		w.Header().Set("Access-Control-Allow-Headers", headerContentType)
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

func serveQueryJSONSqlxDB(w http.ResponseWriter, dbConn *sqlx.DB, query string) {
	var results []State

	if err := sqlx.Select(dbConn, &results, query); err != nil {
		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
		log.Printf("query error: %v", err)
		return
	}

	w.Header().Set(headerContentType, "application/json")
	if err := json.NewEncoder(w).Encode(results); err != nil {
		log.Printf("JSON encode error: %v", err)
	}
}
