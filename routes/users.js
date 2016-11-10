var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.head('/', function (req, res) {
  res.sendStatus(200);
})
module.exports = router;
