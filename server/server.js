// Import required modules
const express = require("express");   // Importing the Express framework
const app = express();                // Create an Express application
const cors = require("cors");         // Importing CORS for handling cross-origin requests
const bodyParser = require('body-parser'); // Importing body-parser for parsing incoming request bodies

// Enable CORS and parse incoming JSON and URL-encoded data
app.use(cors());                      // Allowing cross-origin requests
app.use(bodyParser.urlencoded({ extended: true })) // Parsing URL-encoded data
app.use(bodyParser.json())            // Parsing JSON data

// Set up routes for authentication and home
app.use("/api/auth", require("./routes/auth")); // Mounting routes for authentication
app.use("/api/home", require("./routes/home")); // Mounting routes for home

// Start the server and listen on port 5000
app.listen(5000, () => {
  console.log(`Server is starting on port 5000`); // Display a message when the server starts
});
