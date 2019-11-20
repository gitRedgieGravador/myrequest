const express = require('express');
const app = express();
const userRoute = require('./routes/user')
var connect = require('./setup')

app.use(userRoute)

app.listen(3000, function() {
    console.log('Node server listening on port 3000');
    connect
});