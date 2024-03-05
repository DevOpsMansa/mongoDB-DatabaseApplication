//imports
const mongoose = require('mongoose');
// import mongoose from 'mongoose';

// Define Post schema
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    // Other post fields...
  });
  
  // Index for frequently queried 'title' field == For the `Post` collection, an index is created on the title field.
  postSchema.index({ title: 1 });
  
  // Create MongoDB Models
  const Post = mongoose.model('Post', postSchema);
  

  module.exports = Post;

  // export default mongoose.model('Post', postSchema);

  