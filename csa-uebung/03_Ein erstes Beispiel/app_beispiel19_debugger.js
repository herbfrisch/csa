const http = require('http');
const url = require('url');

const server = http.createServer(function(request, response) {
  response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });

  const parsedUrl = url.parse(request.url, true);
  debugger;
  const body = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Node.js Demo</title>
      </head>
      <body>
        <h1 style="color:green">Hello ${parsedUrl.query.name}</h1>
      </body>
    </html>`;

  response.end(body);
});

server.listen(8080, function() {
  console.log('Server is listening to http://localhost:8080');
});
