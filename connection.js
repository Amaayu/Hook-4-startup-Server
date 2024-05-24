const mongoose = require("mongoose");
const User = require("./models/userModel"); // Ensure this path is correct

async function db() {
  return mongoose
    .connect(
      `mongodb+srv://namdevaniket446:igF55jty52X8eiGz@hook-db.rbfzfd3.mongodb.net/?retryWrites=true&w=majority&appName=hook-db`
    )
    .then(() => {
      console.log("DB connected");
    })
    .catch((error) => {
      console.error("Error connecting to the database:", error);
    });
}

module.exports = { db };
