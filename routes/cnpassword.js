var express = require('express');
var router = express.Router();
var passwd = require('../passwd/passwd');
var server = require('../util/cnserver');

/* POST checks the password to allow for download of the correct preview app. */
router.post('/', function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    var magazine_info = {};
    if(email && password) {
        magazine_info = passwd.match(email,password);
    }
    if(magazine_info.magazine !== '') {
        res.render('cndownload', { title: magazine_info.display_name, server: server.serverUrl(req) });
    } else {
        res.render('error', {message: 'Bad email or password', error: {status: 'User error', stack: 'Incorrect username or password'}})
    }
});

module.exports = router;
