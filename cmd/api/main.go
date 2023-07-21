package main

import (
	"context"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var atlasConnectionURI string

const port = "8080"

type agriApp struct {
	Domain string
}

func main() {

	err := godotenv.Load(".env")

	if err != nil {
		log.Fatal("Error loading .env file")
	}

	atlasConnectionURI = os.Getenv("MONGO_DB")

	var app agriApp

	app.Domain = "test.com"

	log.Print("Starting application...")

	//start a web server
	// serverErr := http.ListenAndServe(fmt.Sprintf("localhost:%d", port), nil)
	serverErr := http.ListenAndServe(net.JoinHostPort("0.0.0.0", port), app.routes())

	if serverErr != nil {
		log.Fatal()
	}

}

func GetDb() (*mongo.Database, error) {
	opts := options.Client().ApplyURI(atlasConnectionURI)
	client, err := mongo.Connect(context.TODO(), opts)

	if err != nil {
		log.Fatal(err)
	} else {

		// check database connection
		err = client.Ping(context.TODO(), nil)
		if err != nil {
			log.Fatal(err)
		} else {
			fmt.Println("Database connection succeeded!")
		}
	}

	db := client.Database("agriApp")
	return db, nil
}
