//imports postSchema
const Post = require('../models/postSchema');

await mongoose.connect(process.env.MONGO_URI);

// Create MongoDB Models
const Post = mongoose.model('Post', postSchema);

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

  

