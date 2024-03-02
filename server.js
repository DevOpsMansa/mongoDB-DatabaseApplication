// Imports required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create Express application
const app = express();

// Use middleware for parsing JSON
app.use(bodyParser.json());

// Connect to MongoDB DataBase
mongoose.connect('', { useNewUrlParser: true, useUnifiedTopology: true });

// Define MongoDB Schemas
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const commentSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  text: String,
});

// Create MongoDB Models
const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);
const Comment = mongoose.model('Comment', commentSchema);

// API Endpoints

// Create a new user
app.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});