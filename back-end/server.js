const express = require('express');
const app = express();
const userRoute = require('./routes/user')
var connect = require('./setup')
var cors = require('cors')
app.use(userRoute)
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});
var port = 3232
app.listen(port, function() {
    console.log('Node server listening on port ', port);
   // connect
});