var express = require('express');
var router = express.Router();
var passwd = require('../passwd/passwd');
var server = require('../util/cnserver');

/* POST checks the password to allow for download of the correct preview app. */
router.post('/', function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    var magazine = '';
    if(email && password) {
        magazine = passwd.match(email,password);
    }
    if(magazine !== '') {
        res.render('cndownload', { title: magazine, server: server.serverUrl(req) });
    } else {
        res.render('error', {message: 'Bad email or password', error: {status: 'User error', stack: 'Problem with username or password'}})
    }
});

module.exports = router;
