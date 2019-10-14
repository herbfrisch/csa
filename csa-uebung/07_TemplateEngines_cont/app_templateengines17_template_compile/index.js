const http = require('http');
const pug = require('pug');

const fn = pug.compileFile('templates/compile.pug');
http
  .createServer((req, res) => {
    let output = fn({ name: 'World' });
    output += fn({ name: 'Node.js' });

    res.end(output);
  })
  .listen(8080);
