exports.serverUrl = function(req) {
    var server = 'http://localhost:3000';
    if(req.app.get('env') === 'production') {
        server = 'https://preview.condenast.com';
    } else if(req.app.get('env') === 'staging') {
        server = 'http://stagpublish.condenast.com:3000';
    }
    return server;
}