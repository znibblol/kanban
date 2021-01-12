// Libraries
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

// Variables
const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('Connected to DB!');
}).catch((err) => {
    console.log(err);
});

// Middleware
app.use(morgan('dev'));

// Route handling
app.get('/', (req, res) => {
    res.json({msg: 'Work in progress'});
});

// Start server
app.listen(PORT, () => console.log('Server is listening on port: ' + PORT));