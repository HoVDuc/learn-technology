/*
Đây là đoạn code Node.js tạo một web server đơn giản:

http.createServer: tạo một HTTP server mới
Hàm callback nhận 2 tham số req (request) và res (response)
res.writeHead: gửi header với status code 200 và content type text/plain
res.end: gửi nội dung "Hello World!" về client
listen(8080): lắng nghe cổng 8080 cho server
Nói chung, đoạn code này tạo một web server trả về nội dung "Hello World!" khi có request tới. Server sẽ lắng nghe cổng 3030.
*/

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end('Hello World!')
}).listen(8080)
