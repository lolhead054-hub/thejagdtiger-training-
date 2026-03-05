'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
mongoose.connect('mongodb://localhost:27017/your-db-name', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err));

// Basic routes
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server!');
});

app.get('/api/example', (req, res) => {
    res.json({ message: 'This is an example route!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
