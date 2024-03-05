//imports
const mongoose = require('mongoose');
// import mongoose from 'mongoose';


// Define User schema
const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, // The 'name' field is required
    trim: true, // Trim whitespace from the beginning and end of the string
    minlength: 2, // Minimum length of the string
    maxlength: 50, // Maximum length of the string
    validate: {
      validator: (value) => /^[a-zA-Z\s]*$/.test(value), // Custom validation using a regular expression
      message: 'Name can only contain letters and spaces', // Error message for custom validation
  },
},
  email: { 
    type: String, 
    required: true, 
    unique: true, // Ensures that the 'email' field is unique across documents
    lowercase: true, // Convert email to lowercase before saving
    validate: {
      validator: (value) =>
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value), // Email format validation
      message: 'Invalid email address',
  },

  }
//   // Other user fields...
});

// Index for frequently queried 'name' field == for the `User` collection, an index is created on the name field since it's frequently queried
userSchema.index({ name: 1 });

// Create MongoDB Models
const User = mongoose.model('User', userSchema);

// Example usage
const newUser = new User({
  name: 'John Doe',
  email: 'john.doe@example.com',
  // Other user fields...
});

// Save the user to the database
newUser.save()
  .then((user) => {
    console.log('User saved:', user);
  })
  .catch((error) => {
    console.error('Error saving user:', error.message);
  });

  module.exports = User;

  // export default mongoose.model('User', userSchema);



//Note:
  //The `name` field is required, and additional validations include trimming whitespace, enforcing minimum and maximum lengths, and using a custom regular expression to allow only letters and spaces.
  // The `email` field is required, unique, and has a custom validation rule for email format using a regular expression.
