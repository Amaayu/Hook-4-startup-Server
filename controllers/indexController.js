const User = require("../models/userModel");

const getUsers = async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username, // Make sure 'username' is provided
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save();
    console.log("done bhai");
    res.status(201).send("User created successfully");
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Error creating user");
  }
};

module.exports = { getUsers };