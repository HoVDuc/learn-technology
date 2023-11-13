// Download "upper-case": npm install upper-case
var http = require('http');
var uc = require('upper-case');

http.createServer(function (req, res) {
    res.writeHand(200, {'Content-Type': 'text/html'});
    res.write(uc.upperCase('Hello world!'));
    res.end();
}).listen(8080);