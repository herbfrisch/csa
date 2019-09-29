const http = require('http');

const server = http.createServer(function(request, response) {
  response.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
  response.write('Hello ');
  response.end(' World\n');
});

server.listen(8080, function() {
  console.log('Server is listening to http://localhost:8080');
});
