// Requires
var express = require('express');
var mongoose = require('mongoose');


// variable initialization

var app = express();


// Database Conection

mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw error;
    console.log('Connected to database');
});


// Routes

app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        message: 'Request accepted.'
    });
});


// listen requests
var port = 3456;
app.listen(port, () => {
    console.log("Express Server listening in port ", port);
})