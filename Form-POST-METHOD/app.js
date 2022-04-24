const express = require("express");
const app = express();

app.use(express.static("./public"));
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/login", (req, res) => {
  res.send("Thanks for Submitting your Name!");
});

app.listen(5000, (req, res) => {
  console.log("Server is listening on port 5000");
});
