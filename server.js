const express = require('express');
const db = require('./config/connection'); // MongoDB connection
const routes = require('./routes'); // Import your routes

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes for API paths
app.use('/api', routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
