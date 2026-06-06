const express = require("express");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.send("Server Running Successfully");
});

// Welcome Route
app.get("/welcome", (req, res) => {
  res.send("Welcome to Express Learning");
});

// Student Route
app.get("/student", (req, res) => {
  res.json({
    name: "rakib",
    course: "MERN Stack",
    batch: 15,
  });
});

// Search Route (GET Query)
app.get("/search", (req, res) => {
  res.json(req.query);
});

// Register Route (POST JSON Body)
app.post("/register", (req, res) => {
  res.json({
    message: "Registration Successful",
    data: req.body,
  });
});

// Product Route (POST Query Parameter)
app.post("/product", (req, res) => {
  const { id } = req.query;

  res.json({
    productId: id,
  });
});

// Login Route (POST Headers)
app.post("/login", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;

  res.json({
    username,
    password,
  });
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});