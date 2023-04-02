const express = require("express");

const app = express();

const PORT = 5001;

app.get("/", (req, res) => {
  res.send("Hello Get Method");
});

app.post("/", (req, res) => {
  res.send("Hello Post Method");
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
