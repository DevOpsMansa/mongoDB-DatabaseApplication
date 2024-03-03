const mongoose = require('mongoose');

// Define User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Other user fields...
});

// Index for frequently queried 'name' field == for the `User` collection, an index is created on the name field since it's frequently queried
userSchema.index({ name: 1 });

const User = mongoose.model('User', userSchema);