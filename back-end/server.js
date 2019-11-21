const express = require('express');
const app = express();
const userRoute = require('./routes/user')
    //var connect = require('./setup')
var cors = require('cors')

app.use(cors())

app.use(userRoute)
var port = 3232
const server = app.listen(port, function() {
    console.log('Node server listening on port ', port);
    // connect
});
const io = require("socket.io")(server);

io.on("connection", socket => {
    socket.on('sample', function(data) {
        socket.broadcast.emit('sample', data)
    })
});