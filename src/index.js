const express = require("express");
const app = express();
const PORT = 5001;
const usersRoutes = require("./routes/users");
const { logRequest, logResponse } = require("./middleware/logs");
const mysql = require("mysql2");

const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "express_rest",
});

// Middleware 1
app.use(logRequest);

// Middleware 2
app.use(logResponse);

// Middleware 3 -> Mengizinkan inputan req.body berupa JSON
app.use(express.json());

app.use("/users", usersRoutes);

app.use("/", (req, res) => {
  dbPool.execute("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        messages: "Internal Server Error",
      });
    }

    res.json({
      messages: "Get All Users Success",
      data: result,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
