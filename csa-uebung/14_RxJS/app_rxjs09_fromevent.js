const { createServer } = require('http');
const { fromEvent } = require('rxjs');

const server = createServer().listen(8080, () =>
  console.log('Server is listening'),
);

fromEvent(server, 'request').subscribe(([, response]) => {
  response.end('Hello RxJS');
});
