const http2 = require('http2');
const fs = require('fs');
let addresses = require('./data');
const getList = require('./list');
const deleteAddress = require('./delete');

const { HTTP2_HEADER_PATH, HTTP2_HEADER_STATUS } = http2.constants;

const options = {
  key: fs.readFileSync('./localhost.key'),
  cert: fs.readFileSync('./localhost.cert'),
};

const server = http2.createSecureServer(options);

server.on('stream', (stream, headers) => {
  const parts = headers[HTTP2_HEADER_PATH].split('/');
  if (parts.includes('delete')) {
    addresses = deleteAddress(addresses, parts[2]);
    redirect(stream, '/');
  } else {
    stream.respond({ [HTTP2_HEADER_STATUS]: 200 });
    stream.pushStream(
      { [HTTP2_HEADER_PATH]: '/styles/style.css' },
      (err, pushStream, headers) => {
        if (err) throw err;
        pushStream.respondWithFile(__dirname + '/styles/style.css', {
          [HTTP2_HEADER_STATUS]: 200,
          'content-type': 'text/css',
        });
      },
    );
    stream.end(getList(addresses));
  }
});

server.listen(8080, () =>
  console.log('Adressbuch erreichbar unter https://localhost:8080'),
);

function redirect(stream, to) {
  stream.respond({
    location: '/',
    'content-type': 'text/plain',
    [HTTP2_HEADER_STATUS]: 302,
  });
  stream.end('302 Redirecting to /');
}
