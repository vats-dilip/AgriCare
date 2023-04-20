package main

import (
	"agriAppBackend/internal/models"
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

var db *mongo.Database = nil

func (app *agriApp) Home(w http.ResponseWriter, r *http.Request) {

	var payload models.ServerMetaData

	payload.Message = "AgriApp Backend API"
	payload.Version = "1.1.0"
	payload.ServerStatus = "Online"
	payload.DbStatus = true

	if db == nil {
		payload.DbStatus = false
		var err error
		db, err = GetDb()
		dbErr := db.Client().Ping(context.TODO(), nil)

		if err != nil {

			log.Fatal(dbErr)
		} else {
			payload.DbStatus = true
		}

	}

	out, err := json.Marshal(payload)
	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(out)
}

func (app *agriApp) GetAllSchemes(w http.ResponseWriter, r *http.Request) {

	if db == nil {
		var err error
		db, err = GetDb()
		dbErr := db.Client().Ping(context.TODO(), nil)

		if err != nil {
			log.Fatal(dbErr)
		}
	}

	collection := db.Collection("scheme")

	// maintain a pointer to the collection and keep on adding the document in an array
	cursor, err := collection.Find(context.Background(), bson.M{})

	if err != nil {
		log.Fatal(err)
	}

	defer cursor.Close(context.Background())

	var allSchemes []models.Schemes

	// now iterate over the documents
	for cursor.Next(context.Background()) {

		var currentScheme models.Schemes
		err := cursor.Decode(&currentScheme)
		if err != nil {
			log.Fatal(err)
		}
		allSchemes = append(allSchemes, currentScheme)
	}

	if err := cursor.Err(); err != nil {
		log.Fatal(err)
	}

	jsonResponse, err := json.Marshal(allSchemes)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonResponse)
}

func (app *agriApp) RegisterUserToScheme(w http.ResponseWriter, r *http.Request) {

	var registrationData models.RegistrationForm

	err := json.NewDecoder(r.Body).Decode(&registrationData)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	if db == nil {
		var err error
		db, err = GetDb()
		dbErr := db.Client().Ping(context.TODO(), nil)

		if err != nil {
			log.Fatal(dbErr)
		}
	}

	collection := db.Collection("userRegistrationToSchemes")
	result, err := collection.InsertOne(context.Background(), registrationData)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	jsonResponse, err := json.Marshal(result.InsertedID)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonResponse)

}
