var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const filename = '.' + req.baseUrl;
    res.download(filename);
});

module.exports = router;