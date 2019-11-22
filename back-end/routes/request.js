const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const Request = require('../models/request')
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.post('/addRequest', function(req, res) {
    var user = new Request(req.body)
    user.save(function(err,resp) {
        if (err) {
            return res.send("error on saving!!")
        } else {
            return res.send({
                sms: "Successfully Saved",
                user: resp
            })
        }
    })
})

router.get('/getRequest', function(req, res) {
    Request.findOne({}, function(err, data) {
        if (err) {
            return res.send(err)
        }
        if (data == null) {
            return res.send({ sms: "Username Not Found", user: data })
        } else {
            return res.send({ sms: "Success", user: data })
        }
    })
})

router.delete('/deleteuser', function(req, res) {
    User.remove({}, function(err, resp) {
        if (err) {
            return res.send(err)
        } else {
            return res.send(resp)
        }
    })
})
//fake login
router.post('/login', function(req, res) {
    var data = req.body
    var acc_token = jwt.sign(data , "token1234", { expiresIn: "12h" })
    res.send({
        status: true,
        auth: true,
        user: data,
        token: acc_token,
        sms: "success"
    })
})
// router.post('/login', function(req, res) {
//     var usernamei = req.body.username
//     var passwordi = req.body.password
//     User.findOne({ username: usernamei }, function(err, data) {
//         if (err) {
//             return res.send(err)
//         }
//         if (data != null) {
//             var match = bcrypt.compareSync(passwordi, data.password)
//             if (match) {
//                 var acc_token = jwt.sign({ data }, "token1234", { expiresIn: "12h" })
//                 return res.send({
//                     status: true,
//                     auth: true,
//                     user: data,
//                     token: acc_token,
//                     sms: "success"
//                 })
//             } else {
//                 return res.send({
//                     status: false,
//                     auth: false,
//                     sms: "Incorrect Password!!",
//                     token: null,
//                     user: null
//                 })
//             }
//         }
        
//         return res.send({
//             status: false,
//             auth: false,
//             sms: "Username Not Found!!"
//         })
//     })
// })
module.exports = router;