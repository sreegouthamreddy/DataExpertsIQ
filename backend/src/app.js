const express = require('express');
const cors = require('cors'); // Import CORS middleware

const app = express();

// Use CORS middleware
app.use(cors());

// Other middlewares (if any)
app.use(express.json());

// Your routes go here
const authRoutes = require('./routes/authRoutes');
const notesRoutes = require('./routes/notesRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/notes', notesRoutes);

module.exports = app;
