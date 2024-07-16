// app.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const path = require("path");

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "views")));
app.set('view engine', 'ejs');

// Routes
app.use('/auth', authRoutes);

// Home route
app.get('/', (req, res) => {
 res.render('index');

});

// Start the server
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}`);
});