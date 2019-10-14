const https = require('https');
const fs = require('fs');
let addresses = require('./data');
const getList = require('./list');
const deleteAddress = require('./delete');
const getForm = require('./form');
const saveAddress = require('./save');
const queryString = require('querystring');
const formidable = require('formidable');

const options = {
  key: fs.readFileSync('./localhost.key'),
  cert: fs.readFileSync('./localhost.cert'),
};

https
  .createServer(options, (request, response) => {
    const parts = request.url.split('/');
    if (parts.includes('delete')) {
      addresses = deleteAddress(addresses, parts[2]);
      redirect(response, '/');
    } else if (parts.includes('new')) {
      send(response, getForm());
    } else if (parts.includes('edit')) {
      send(response, getForm(addresses, parts[2]));
    } else if (parts.includes('save') && request.method === 'POST') {
      const form = new formidable.IncomingForm();
      form.parse(request, function(err, address, files) {
        console.log('data', address);
        if (files.upload) {
          fs.rename(files.upload.path, 'assets/' + files.upload.name, () => {
            address['file'] = '/assets/' + files.upload.name;
          });
          addresses = saveAddress(addresses, address);
          redirect(response, '/');
        } else {
          addresses = saveAddress(addresses, address);
          redirect(response, '/');
        }
      });
    } else if (parts.includes('assets')) {
      fs.readFile(__dirname + request.url, function(err, data) {
        if (err) {
          response.statusCode = 404;
          response.end();
        } else {
          response.end(data);
        }
      });
    } else if (request.url === '/styles/style.css') {
      fs.readFile(__dirname + request.url, 'utf8', function(err, data) {
        if (err) {
          response.statusCode = 404;
          response.end();
        } else {
          response.end(data);
        }
      });
    } else {
      send(response, getList(addresses));
    }
  })
  .listen(8080, () =>
    console.log('Adressbuch erreichbar unter https://localhost:8080'),
  );

function send(response, responseBody) {
  response.writeHead(200, { 'content-type': 'text/html' });
  response.end(responseBody);
}

function redirect(response, to) {
  response.writeHead(302, { location: '/', 'content-type': 'text/plain' });
  response.end('302 Redirecting to /');
}
