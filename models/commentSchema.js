//imports
const mongoose = require('mongoose');
// import mongoose from 'mongoose';

// Define Comment schema
const commentSchema = new mongoose.Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    text: { type: String, required: true },
    // Other comment fields...
  });
  
  // Index for frequently queried 'postId' field == For the `Comment `collection, an index is created on the postId field as it might be queried when retrieving comments for a specific post.
  commentSchema.index({ postId: 1 });
  
  // Create MongoDB Models
  const Comment = mongoose.model('Comment', commentSchema);

  module.exports = Comment;

  // export default mongoose.model('Comment', commentSchema);

  
  