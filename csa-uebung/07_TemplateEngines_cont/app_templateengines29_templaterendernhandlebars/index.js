const http = require('http');
const fs = require('fs');
const hbs = require('handlebars');

http
  .createServer((req, res) => {
    fs.readFile('templates/index.hbs', 'utf-8', (err, data) => {
      const template = hbs.compile(data);
      const result = template({ name: 'Handlebars' });
      res.end(result);
    });
  })
  .listen(8080);
