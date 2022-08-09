var express = require('express');
var passwd = require('../passwd/passwd');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    var magazine = '';
    if(email && password) {
        magazine = passwd.match(email,password);
    }
    if(magazine !== '') {
        res.render('cndownload', { title: magazine });
    } else {
        res.render('error', {message: 'Bad email or password', error: {status: 'User error', stack: 'Problem between keyboard and chair'}})    
    }
});

module.exports = router;
