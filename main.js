var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World! First (or second) node app\n');
}).listen(4000);

console.log('Server started at port 4000');
