const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const session = require('express-session');

const app = express();
const port = 3001;

// Define the CORS options
const corsOptions = {
    credentials: true,
    origin: ['http://localhost:3001', 'http://localhost:80'] // Whitelist the domains you want to allow
};

const crypto = require('crypto');
const secretKey = crypto.randomBytes(64).toString('hex');
console.log(secretKey);



// Middleware
// app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// Use Morgan for logging
app.use(morgan('dev')); 
app.use(cors(corsOptions));

// Configure session management
app.use(session({
    secret: 'secretKey', // Replace with a secure secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
  }));

// Routes
app.use('/api', authRoutes);
app.use('/api', profileRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
// app.listen(port, '192.168.29.36', () => {
//     console.log(`Server running at http://192.168.29.36:${port}/`);
// });

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}/`);
});

module.exports = db;
