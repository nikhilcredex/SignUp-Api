const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const router = require('./app/routes/routes.js');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const dbConfig = require('./config/config.js');
const mongoose = require('mongoose');

app.use(router);

app.use(express.json());

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


// listen for requests
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});
