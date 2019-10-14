const http = require('http');
const addresses = require('./data');
const getList = require('./list');

http
  .createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'text/html' });
    const responseBody = getList(addresses);
    response.end(responseBody);
  })
  .listen(8080, () =>
    console.log('Adressbuch erreichbar unter http://localhost:8080'),
  );
