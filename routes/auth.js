const express = require("express");
const router = express.Router();

// Mock user data (for simplicity)
const users = [
  {
    id: 1,
    username: "asd",
    password: "asd",
  },
];
const productDetails = [
  { id: 1, name: "Watch 1", price: 2500, quantity: 5 ,imageUrl:'/images/product-item6.jpg'},
  { id: 2, name: "Watch 2", price: 7400, quantity: 3 ,imageUrl:'/images/product-item7.jpg'},
  { id: 3, name: "Watch 3", price: 3400, quantity: 1 ,imageUrl:'/images/product-item8.jpg'},
  { id: 4, name: "Watch 4", price: 7100, quantity: 8 ,imageUrl:'/images/product-item9.jpg'},
];

// Register page
router.get("/register", (req, res) => {
  res.render("register");
});

// Handle registration form submission
router.post("/register", (req, res) => {
  const { username, password } = req.body;
  // Simulate user registration (without proper validation and hashing for simplicity)
  users.push({ username, password });
  res.redirect("/auth/login");
});

// Login page
router.get("/login", (req, res) => {
  res.render("login");
});

// Handle login form submission
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Simulate user authentication (without proper validation and hashing for simplicity)
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    res.render("home");
  } else {
    res.send("Invalid credentials. Please try again.");
  }
});

router.get("/home", (req, res) => {
  res.json(productDetails);
});

router.post("/home", (req, res) => {
  // const newItem = req.body;
});

module.exports = router;
