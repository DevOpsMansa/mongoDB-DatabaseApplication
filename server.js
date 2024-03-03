// Imports required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create Express application
const app = express();

// Use middleware for parsing JSON
app.use(bodyParser.json());

// Connect to MongoDB DataBase
mongoose.connect('****', { useNewUrlParser: true, useUnifiedTopology: true });



// // Define MongoDB Schemas
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
// });

// const postSchema = new mongoose.Schema({
//   title: String,
//   content: String,
// });

// const commentSchema = new mongoose.Schema({
//   postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
//   text: String,
// });


// API Endpoints



// Start the server on port 5050
const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});