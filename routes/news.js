/**
 * Created by JP on 02/11/2016.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send('news');
})

router.post('/', function (req, res) {
    console.log(req.body);
    res.sendStatus(200);
})

module.exports = router;
