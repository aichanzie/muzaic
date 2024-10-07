package routes 
import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)


func Connect() *mongo.Collection {

    err := godotenv.Load(".env")
    if err != nil {
        log.Fatalf("Error loading .env file: %s", err)
    }

    MONGO_URI := os.Getenv("DB_CONNECTION_STRING")
	fmt.Println(MONGO_URI)

	// Connect to the database
	clientOptions := options.Client().ApplyURI(MONGO_URI)
	client, err := mongo.Connect(context.Background(), clientOptions)
	
	if err != nil{
		log.Fatal(err)
	}
	err = client.Ping(context.Background(), nil)
	if err != nil{
		log.Fatal(err)
	} else {
		fmt.Println("Connected to MongoDB.")
	}

	collection := client.Database("muzaicdb").Collection("collection_muzaic")

	return collection
} 
