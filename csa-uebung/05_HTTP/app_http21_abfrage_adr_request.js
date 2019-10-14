const http = require('http');
const { Url } = require('url');

const options = new Url('http://localhost:8080/');

const request = http.request(options, response => {
  let body = '';
  response.on('data', chunk => (body += chunk));
  response.on('end', () => {
    console.log(body);
  });
});
request.end();
