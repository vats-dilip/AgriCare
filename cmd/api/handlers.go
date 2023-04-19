package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

func (app *agriApp) Home(w http.ResponseWriter, r *http.Request) {
	var payload = struct {
		ServerStatus string `json:"serverStatus"`
		DbStatus     bool   `json:"dbStatus"`
		Message      string `json:"message"`
		Version      string `json:"version"`
	}{
		ServerStatus: "active",
		Message:      "AgriCare API",
		Version:      "1.0.0",
	}

	db, err := GetDb()

	dbErr := db.Client().Ping(context.TODO(), nil)

	if err != nil {
		log.Fatal(dbErr)
	} else {
		payload.DbStatus = true
	}

	out, err := json.Marshal(payload)

	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(out)
}
