import express from 'express';

import fs from 'fs';

// Initialize Router for User
const router = express.Router();

// Initial routes are starting with /user, so in the router, just / is fine
router.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
    // Reading flat data from user-data.json
    fs.readFile('./user-data.json', 'utf-8', (err, jsonString) => {
        if (err) {
            console.log(err);
        }
        else {
            try {
                // JSON parser
                const data = JSON.parse(jsonString);
                res.send(data);
                console.log('User GET Request OK.');
            } catch (err) {
                console.log('Error parsing JSON', err);
            }
        }
    });
});

export default router;
