const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello Aashu bhai");
});

app.listen(3000, () => {
  console.log("server is started at port-> 3000");
});
