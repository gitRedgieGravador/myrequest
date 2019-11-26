const express = require('express');
const app = express();
const userRoute = require('./routes/user')
var connect = require('./setup')
var cors = require('cors')

app.use(cors())
app.use(userRoute)

var port = 3232
const server = app.listen(port, function() {
    console.log('Api server listening on port:', port);
    connect
});
const io = require("socket.io")(server);
//var helper = require('./controller/getuser')
// io.on("connection", socket => {
//     socket.on('sample', function(data) {
//         helper(data.username).then(resp=>{
//             socket.broadcast.emit('sample', resp)
//         }).catch(err=>{
//             socket.broadcast.emit('sample', err)
//         })
//     })
// });
app.set('socketio', io);