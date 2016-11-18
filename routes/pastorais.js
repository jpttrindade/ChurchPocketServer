/**
 * Created by JP on 09/11/2016.
 */
var express = require('express');
var router = express.Router();
var Pastoral = require('../models/pastoral');

router.get('/', function (req, res) {
    Pastoral.find({}, function (err, pastorais) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log(pastorais);
            res.statusCode = (200);
            res.json({pastorais:pastorais});
        }
    });
});

router.post('/', function (req, res) {
    console.log(req.body);
    var pastoral = new Pastoral(req.body);
    pastoral.save().then(function () {
        console.log('Pastoral saved successfully!');
        res.sendStatus(201);
    });
})


module.exports = router;

