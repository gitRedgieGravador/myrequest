const express = require('express');
const app = express();
const userRoute = require('./routes/user')
var connect = require('./setup')
var cors = require('cors')
app.use(cors())

app.use(userRoute)
var port = 3232
app.listen(port, function() {
    console.log('Node server listening on port ', port);
   // connect
});