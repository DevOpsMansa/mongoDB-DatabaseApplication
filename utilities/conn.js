
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://devopsmansa:J0EzFjIoX4njp01N@dbapp.xenzuty.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

const dotenv = require("dotenv");

dotenv.config();

const connectionString = process.env.MONGO_URI || '';

// Access the default Mongoose connection
const conn = mongoose.connection;

try {
  await mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

// export db 
module.exports = conn;


