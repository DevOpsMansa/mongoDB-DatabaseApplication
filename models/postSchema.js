const mongoose = require('mongoose');

// Define Post schema
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    // Other post fields...
  });
  
  // Index for frequently queried 'title' field == For the `Post` collection, an index is created on the title field.
  postSchema.index({ title: 1 });
  
  const Post = mongoose.model('Post', postSchema);
  