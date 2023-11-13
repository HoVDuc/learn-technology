var http = require('http');
var date = require('./firstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write('The date and time are currently: ' + date.myDateTime());
    res.end('Hello World!');
}).listen(8080);
