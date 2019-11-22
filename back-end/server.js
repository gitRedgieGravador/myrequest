const express = require('express');
const app = express();
const userRoute = require('./routes/user')
//var mandrill = require('node-mandrill')('c3d911e4-578e-4933-ab89-97b6de339be9');
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

// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: 'smtp.elasticemail.com',
//     port: 2525,
//     secure: false,
//     auth: {
//         user: 'iderge32@gmail.com',
//         pass: '12da171b-6a8a-4e74-b66e-b97ac72ccbf2'
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });

// var mailOptions = {
//     from: 'iderge32@gmail.com',
//     to: 'redgie.gravador@student.passerellesnumeriques.org',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info) {
//     console.log("sending...")
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });