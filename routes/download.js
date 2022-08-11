var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    const filename = '.' + req.baseUrl;
    if(filename.match(/^\.\/previewapps\/\w*\/(\w*)?manifest.plist/)) {
        fs.readFile(filename,"utf8", function(err, data) {
            var newData = data.replaceAll("https://stagpublish.condenast.com:3001","http://localhost:3000");
            res.setHeader('Content-Type', 'application/plist');
            res.end(newData);
        });
    } else if(filename.match(/^\.\/previewapps\/\w*\/\w*\.\w{1,4}/)) {
        res.download(filename);
    } else {
        res.render('error', {message: 'Bad filename', error: {status: 'Path error', stack: 'Filename is incorrect'}})
    }
});

module.exports = router;