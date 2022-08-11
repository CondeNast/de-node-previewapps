exports.serverUrl = function(req) {
    var server = 'http://localhost:3000';
    if(req.app.get('env') === 'production') {
        server = 'https://cnstud.io:3001';
    } else if(req.app.get('env') === 'staging') {
        server = 'https://stagpublish.condenast.com:3001';
    }
    return server;
}