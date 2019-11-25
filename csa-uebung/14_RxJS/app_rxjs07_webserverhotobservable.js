const { createServer } = require('http');
const { Observable } = require('rxjs');
const { tap } = require('rxjs/operators');

const server = createServer();
server.listen(8080, () => console.log('Server is listening'));

const httpObservable = Observable.create(observer => {
  server.on('request', (request, response) =>
    observer.next({ request, response }),
  );
});

const logger = ({ request }) => console.log('requesting: ', request.url);

httpObservable.pipe(tap(logger)).subscribe(({ request, response }) => {
  response.end('Hello RxJS');
});
