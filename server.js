const express = require("express");
const connectDB = require("./src/config/database");
require("dotenv").config();
const app = express();

connectDB();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hello World!",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
