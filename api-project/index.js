import express from 'express';
import bodyParser from 'body-parser'; // Middleware - Needed for POST requests

// Import User Routes from routes/user.js
import userRoutes from './routes/user.js';

// Initializing application
const App = express();
const PORT = 8080;

//  Initializing bodyParser
App.use(bodyParser.json());

// Setting Route Path to user file
App.use('/user', userRoutes);

// Creating GET Route
App.get('/', (req, res) => {
    console.log('Home GET Request OK.');

    res.send('Homepage');
});

// Listen to incoming requests
App.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
