// Imports required modules
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userSchema");
const bodyParser = require("body-parser");
const dotenv = require("dotenv"); // Import dotenv

// Load environment variables from .env file
dotenv.config();

// Import the db connection
const { usersData, postsData, commentsData } = require("./utilities/db.js");
// console.log(postsData);

// Create Express application
const app = express();

//Middleware
app.use(express.json());

// Use middleware for parsing JSON
app.use(bodyParser.json());

// My routes and other middleware go here...

const PORT = process.env.PORT || 5050; // Uses the environment variable for port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
