var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('cnpreview', { title: 'Preview' });
});

module.exports = router;
