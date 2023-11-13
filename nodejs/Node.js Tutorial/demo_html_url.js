/**
 * Tạo một server đơn giản với Node.js 
 * và trả về dữ liệu về client 
 */

// require module http
var http = require('http');

// tạo một server mới 
http.createServer(function (req, res) {
    // Gửi header với status code 200 và content type text/html
    res.writeHead(200, {'Content-Text': 'text/html'});
    // Gửi dữ liệu về client, ở đây là req.url để lấy URL được request.
    res.write(req.url);
    // Kết thúc response.
    res.end();
}).listen(8080);