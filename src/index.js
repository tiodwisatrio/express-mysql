const express = require("express");
const app = express();
const PORT = 5001;

const usersRoutes = require("./routes/users");
const { logRequest, logResponse } = require("./middleware/logs");

// Middleware 1
app.use(logRequest);

// Middleware 2
app.use(logResponse);

// Middleware 3 -> Mengizinkan inputan req.body berupa JSON
app.use(express.json());

app.use("/users", usersRoutes);



app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
