const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./model/userModel"); // Ensure this path is correct
const usersRouter = require("./routes/userRouts"); // Adjust the path if necessary
const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// midelwares

app.use("/users", usersRouter);

mongoose
  .connect(
    `mongodb+srv://namdevaniket446:igF55jty52X8eiGz@hook-db.rbfzfd3.mongodb.net/?retryWrites=true&w=majority&appName=hook-db`
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
