//imports commentSchema
const Comment= require('../models/commentSchema');

await mongoose.connect(process.env.MONGO_URI);

// Create MongoDB Models
const Comment = mongoose.model('Comment', commentSchema);

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

  