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

// GET all users == `/users`, it retrieves all users from the User collection using User.find().
app.get('/users', async (req, res) => { 
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// POST route for creating users == `/users`, it creates a new user instance from the request body, saves it to the User collection, and returns the created user.
app.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PATCH route for updating user information == `/users/:id`, it updates a user with the specified ID using the findByIdAndUpdate method and returns the updated user.
app.patch('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;

    const user = await User.findByIdAndUpdate(userId, updatedUser, { new: true });

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// DELETE route for deleting a user == `/users/:id`, it deletes a user with the specified ID using the
app.delete('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// GET all posts == `/posts`, it retrieves all posts from the Post collection using Post.find().
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// POST route for creating posts == `/posts`, it creates a new post instance from the request body, saves it to the Post collection, and returns the created post.
app.post('/posts', async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// PATCH route for updating post information == `/posts/:id`, it updates a post with the specified ID using the findByIdAndUpdate method and returns the updated post.
app.patch('/posts/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    const updatedPost = req.body;

    const post = await Post.findByIdAndUpdate(postId, updatedPost, { new: true });

    if (!post) {
      return res.status(404).send('Post not found');
    }

    res.json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// DELETE route for deleting a post == `/posts/:id`, it deletes a post with the specified ID using the findByIdAndDelete method and returns the deleted post.
app.delete('/posts/:id', async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findByIdAndDelete(postId);

    if (!post) {
      return res.status(404).send('Post not found');
    }

    res.json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// GET all comments == `/comments`, it retrieves all comments from the Comment collection using Comment.find().
app.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST route for creating comments == `/comments`, it creates a new comment instance from the request body, saves it to the Comment collection, and returns the created comment.
app.post('/comments', async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// PATCH route for updating comment information == `/comments/:id`, it updates a comment with the specified ID using the findByIdAndUpdate method and returns the updated comment.
app.patch('/comments/:id', async (req, res) => {
  try {
    const commentId = req.params.id;
    const updatedComment = req.body;

    const comment = await Comment.findByIdAndUpdate(commentId, updatedComment, { new: true });

    if (!comment) {
      return res.status(404).send('Comment not found');
    }

    res.json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// DELETE route for deleting a comment == `/comments/:id`, it deletes a comment with the specified ID using the findByIdAndDelete method and returns the deleted comment.
app.delete('/comments/:id', async (req, res) => {
  try {
    const commentId = req.params.id;

    const comment = await Comment.findByIdAndDelete(commentId);

    if (!comment) {
      return res.status(404).send('Comment not found');
    }

    res.json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start the server on port 5050
const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});