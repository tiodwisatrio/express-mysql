const express = require("express");
const app = express();
const PORT = 5001;

const usersRoutes = require("./routes/users.js");

// Middleware 1
app.use((req, res, next) => {
  console.log("Middleware 1 : Log terjadi request ke api server");
  next();
});

// Middleware 2
app.use((req, res, next) => {
  console.log("Middleware 2 : Log terjadi request ke api server");
  next();
});

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello Get Method");
});

app.post("/", (req, res) => {
  // res.send("Hello Post Method");
  res.json({
    nama: "Tio Dwi Satrio",
    email: "tiodwisatrio27@gmail.com",
    umur: 20,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
