const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/userModel"); // Ensure this path is correct
const usersRouter = require("./routes/userRouts"); // Adjust the path if necessary
const indexRouter = require("./routes/indexRouts");
const app = express();
const bodyParser = require("body-parser");
const { db } = require("./connection");

//Database
db();

// midelwares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
