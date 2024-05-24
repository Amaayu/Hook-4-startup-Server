const express = require("express");
const router = express.Router();
const User = require("../models/userModel"); // Ensure this path is correct
const { getUsers } = require("../controllers/userController"); // Ensure Controller path
router.post("/", getUsers);

module.exports = router;
