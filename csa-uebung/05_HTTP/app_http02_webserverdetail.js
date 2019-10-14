const Server = require('http').Server;

const server = new Server();

server.on('request', function(request, response) {
  response.statusCode = 200;
  response.setHeader('content-type', 'text/html');
  const responseBody = `<!DOCTYPE html>
  <html>
    <head>
      <title>Adressbuch</title>
    </head>
    <body>
      <h1>Adressbuch</h1>
    </body>
  </html>`;
  response.write(responseBody);
  response.end();
});

server.on('listening', function() {
  console.log('Adressbuch erreichbar unter http://localhost:8080');
});

server.listen(8080);
