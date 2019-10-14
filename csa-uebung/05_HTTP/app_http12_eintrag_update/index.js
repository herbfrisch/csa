const http = require('http');
let addresses = require('./data');
const getList = require('./list');
const deleteAddress = require('./delete');
const getForm = require('./form');
const saveAddress = require('./save');
const querystring = require('querystring');

http
  .createServer((request, response) => {
    const parts = request.url.split('/');
    if (parts.includes('delete')) {
      addresses = deleteAddress(addresses, parts[2]);
      redirect(response, '/');
    } else if (parts.includes('new')) {
      send(response, getForm());
    } else if (parts.includes('edit')) {
      send(response, getForm(addresses, parts[2]));
    } else if (parts.includes('save') && request.method === 'POST') {
      let body = '';
      request.on('readable', () => {
        const data = request.read();
        body += data !== null ? data : '';
      });
      request.on('end', () => {
        const address = querystring.parse(body);
        addresses = saveAddress(addresses, address);
        redirect(response, '/');
      });
    } else {
      send(response, getList(addresses));
    }
  })
  .listen(8080, () =>
    console.log('Adressbuch erreichbar unter http://localhost:8080'),
  );

function send(response, responseBody) {
  response.writeHead(200, { 'content-type': 'text/html' });
  response.end(responseBody);
}

function redirect(response, to) {
  response.writeHead(302, { location: '/', 'content-type': 'text/plain' });
  response.end('302 Redirecting to /');
}
