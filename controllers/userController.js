//imports userSchema
const User = require("../models/userSchema");

await mongoose.connect(process.env.MONGO_URI);

// GET all users == `/users`, it retrieves all users from the User collection using User.find().
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// POST route for creating users == `/users`, it creates a new user instance from the request body, saves it to the User collection, and returns the created user.
app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PATCH route for updating user information == `/users/:id`, it updates a user with the specified ID using the findByIdAndUpdate method and returns the updated user.
app.patch("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;

    const user = await User.findByIdAndUpdate(userId, updatedUser, {
      new: true,
    });

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// DELETE route for deleting a user == `/users/:id`, it deletes a user with the specified ID using the
app.delete("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).send("User Deleted");
    }

    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
