package main

import (
    "fmt"
    "log"
    "net/http"
	"encoding/json"
    "github.com/gorilla/mux"
)


func greetingsHandler(w http.ResponseWriter,r *http.Request){
    fmt.Fprintf(w,"Greeting from Go Server 👋")
}

// For the POST request 
type Founder struct{
    Name string `json:"name"`
    Age uint32 `json:"age"`
    Email string `json:"email"`
    Company string `json:"company"`
}

var founders []Founder 

founders = append(founders, Founder{Name:"Mehul",Age:23,Email:"random@random.com",Company: "BharatX"})

func main(){
    r := mux.NewRouter()

    r.HandleFunc("/",greetingsHandler).Methods("GET")

    fmt.Println("Hello from GoServer 👋")
    fmt.Printf("Starting server at port 8000\n")
    log.Fatal(http.ListenAndServe(":8000",r))
}