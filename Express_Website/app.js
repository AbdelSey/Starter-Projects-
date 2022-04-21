// using express

const express = require("express");

const app = express();

app.use(express.static("./public"));

app.get("/products", (req, res) => {
  res.status(200).send("<h1> This Is the Products Page </h1>");
});

app.get("/reviews", (req, res) => {
  res.status(200).send("<h1> This is the Reviews Page </h1>");
});

app.get("/PriorCustomers", (req, res) => {
  res.status(200).send("This is the Prior Customers Page");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1> Please Check your URL </h1");
});

app.listen(5000, () => {
  console.log("Server is displaying on port 5000...");
});
