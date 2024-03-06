// Imports required modules
const express = require("express");
const mongoose = require("mongoose");
const user = require("./models/userSchema"); //why not active??
const bodyParser = require("body-parser");
const dotenv = require("dotenv"); // Import dotenv

// Load environment variables from .env file
dotenv.config();

// Define an asynchronous function to connect to MongoDB
const connectToMongoDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  // Import the db connection
  const { usersData, postsData, commentsData } = require("./utilities/db.js");
  //  console.log(usersData);

  // Create Express application
  const app = express();

  // Middleware
  app.use(express.json());

  // Use middleware for parsing JSON
  app.use(bodyParser.json());

  // My routes and other middleware go here...

  const PORT = process.env.PORT || 5050; // Uses the environment variable for port
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

// Call the asynchronous function to connect to MongoDB and start the server
connectToMongoDB();

// //connect mongoose to URI file *****
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB connected successfully");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });
