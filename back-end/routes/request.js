const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const Request = require('../models/request')
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
router.use(bodyParser.urlencoded({
    extended: false
}));
router.use(bodyParser.json());


router.post('/addRequest', (req, res) => {
    var user = new Request(req.body)
    user.save((err, data) => {
        if (err) return res.send("error on saving!!");
        return res.send({
            message: "Successfully Saved",
            data
        });
    })
})

// router.get('/getRequest', (req, res) => {
//     Request.find({}, (err, data) => {
//         if (err) return res.send(err);
//         return res.send({
//             message: "Success",
//             data
//         })
//     })
// })

router.get('/getUnread', (req, res) => {
    Request.find({ status: "unread" }, (err, data) => {
        if (err) return res.send(err);
        return res.send({
            message: "Success",
            data
        })
    })
})

router.get('/getApproved', (req, res) => {
    Request.find({ status: "approved" }, (err, data) => {
        if (err) return res.send(err);
        return res.send({
            message: "Success",
            data
        })
    })
})

router.get('/getPending', (req, res) => {
    Request.find({ status: "pending" }, (err, data) => {
        if (err) return res.send(err);
        return res.send({
            message: "Success",
            data
        })
    })
})

router.get('/getRejected', (req, res) => {
    Request.find({ status: "rejected" }, (err, data) => {
        if (err) return res.send(err);
        return res.send({
            message: "Success",
            data
        })
    })
})

router.put('/updateRequest/:id', (req, res) => {
    console.log(req.body.data)
    Request.findByIdAndUpdate(req.params.id, {
        status: req.body.data
    }, (err, data) => {
        if (err) return res.send(err);
        return res.send({
            message: "Successfully updated!",
            data
        })
    })
})

router.delete('/deleteRequest/:id', (req, res) => {
    Request.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) return res.send(err);
        return res.send({
            message: "Succescfully deleted",
            data
        })
    })
})

//number of requests rejected
router.get('/numRejected', (req, res) => {
    Request.countDocuments({
        status: "rejected"
    }, (err, data) => {
        if (err) return res.send(err);
        return res.send({
            message: "Success",
            data
        })
    })
})

//number of requests approved
router.get('/numApproved', (req, res) => {
    Request.countDocuments({
        status: "approved"
    }, (err, data) => {
        if (err) return res.send(err);
        return res.send({
            message: "Success",
            data
        })
    })
})

//number of requests unread
router.get('/numUnread', (req, res) => {
    Request.countDocuments({
        status: "unread"
    }, (err, data) => {
        if (err) return res.send(err);
        return res.send({
            message: "Success",
            data
        })
    })
})

//number of request per category

router.post('/mostRequest', (req, res) => {
    Request.aggregate([{
        $group: {
            _id: '$category',
            count: {
                $sum: 1
            }
        }
    }], (err, data) => {
        if (err) return res.send(err);
        return res.send({
            message: "Success",
            data
        })
        router.get('/mostRequest', (req, res) => {

            Request.aggregate([{
                "$sortByCount": "$category"
            }]).limit(1).then(resp => {
                Request.find({
                    category: resp[0]._id
                }).then(resp => {
                    res.send(resp)
                }).catch(err => {
                    res.send(err)
                })
            }).catch(err => {
                res.send(err)
            })
        })
    })
})

module.exports = router;