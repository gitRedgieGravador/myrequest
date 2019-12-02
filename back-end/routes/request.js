const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const Request = require('../models/request')
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.post('/addRequest', (req, res) => {
    var user = new Request(req.body)
    user.save((err, data) => {
        if (err) return res.send("error on saving!!");
        return res.send({ message: "Successfully Saved", data });
    })
})

router.get('/getRequest', (req, res) => {
    Request.find({}, (err, data) => {
        if (err) return res.send(err);
        return res.send({ message: "Success", data })
    })
})

router.post('/updateStatus/:id', (req, res) => {
    Request.findByIdAndUpdate(req.params.id, { status: req.body.status }, (err, data) => {
        if (err) return res.send(err);
        return res.send({ message: "Successfully updated!", data })
    })
})

router.post('/deleteRequest/:id', (req, res) => {
    Request.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) return res.send(err);
        return res.send({ message: "Succescfully deleted", data })
    })
})

//number of requests rejected
router.post('/numRejected', (req, res) => {
    Request.countDocuments({ status: "rejected" }, (err, data) => {
        if (err) return res.send(err);
        return res.send({ message: "Success", data })
    })
})

//number of requests approved
router.post('/numApproved', (req, res) => {
    Request.countDocuments({ status: "approved" }, (err, data) => {
        if (err) return res.send(err);
        return res.send({ message: "Success", data })
    })
})

//number of requests unread
router.post('/numUnread', (req, res) => {
    Request.countDocuments({ status: "unread" }, (err, data) => {
        if (err) return res.send(err);
        return res.send({ message: "Success", data })
    })
})

//number of request per category
router.post('/mostRequest', (req, res) => {
    Request.aggregate([{
        $group: {
            _id: '$category',
            count: { $sum: 1 }
        }
    }], (err, data) => {
        if (err) return res.send(err);
        return res.send({ message: "Success", data })
    })
})

module.exports = router;