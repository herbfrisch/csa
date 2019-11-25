const { createServer } = require('http');
const { Observable } = require('rxjs');
const { tap } = require('rxjs/operators');

const httpObservable = Observable.create(observer => {
  createServer((request, response) =>
    observer.next({ request, response }),
  ).listen(8080, () => console.log('Server is listening'));
});

const logger = ({ request }) => console.log('requesting: ', request.url);

httpObservable.pipe(tap(logger)).subscribe(({ request, response }) => {
  response.end('Hello RxJS');
});
