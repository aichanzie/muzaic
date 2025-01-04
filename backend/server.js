const express = require("express");
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Hi World!");
});

// Set the server to listen on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
