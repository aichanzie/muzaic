require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;

// Validate required secrets
const requiredEnvVars = ["DATABASE_URL", "JWT_SECRET", "API_KEY"];
requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
        throw new Error(`Missing required environment variable: ${varName}`);
    }
});

app.use(express.json()); // parse JSON request bodies

// Basic route
app.get("/", (req, res) => {
    res.json({
        message: "Hello from Express!",
        env: process.env.NODE_ENV || "development",
    });
});

// Example API endpoint
app.get("/api/users", (req, res) => {
    res.json({ users: ["Alice", "Bob", "Charlie"] });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
