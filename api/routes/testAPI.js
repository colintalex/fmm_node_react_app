var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('The Express API - React connection is working properly');
});

module.exports = router;