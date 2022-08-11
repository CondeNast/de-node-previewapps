var express = require('express');
var router = express.Router();
var fs = require('fs');
var server = require('../util/cnserver');

/* GET files, manifest files will have their path modified based on the environment. */
router.get('/', function(req, res, next) {
    const filename = '.' + req.baseUrl;
    if(filename.match(/^\.\/previewapps\/\w+\/\w+.plist/)) {
        fs.readFile(filename,"utf8", function(err, data) {
            var newData = data.replaceAll("https://stagpublish.condenast.com:3001",server.serverUrl(req));
            res.setHeader('Content-Type', 'application/plist');
            res.end(newData);
        });
    } else if(filename.match(/^\.\/previewapps\/\w+\/\w+\.\w{1,4}/)) {
        res.download(filename);
    } else {
        res.render('error', {message: 'Bad filename', error: {status: 'Path error', stack: 'Filename is incorrect'}})
    }
});

module.exports = router;