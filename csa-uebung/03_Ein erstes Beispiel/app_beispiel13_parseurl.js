const http = require('http');
const url = require('url');

console.log('createServer');
const server = http.createServer(function(request, response) {
  console.log('createServer callback');
  response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });

  const parsedUrl = url.parse(request.url, true);

  console.log(parsedUrl);
  console.log('Name: ', parsedUrl.query.name);

  const body = `...<h1 style="color:green">
      Hello ${parsedUrl.query.name}
    </h1>...`;

  response.end(body);
});

console.log('listen');
server.listen(8080, function() {
  console.log('Server is listening to http://localhost:8080');
});
