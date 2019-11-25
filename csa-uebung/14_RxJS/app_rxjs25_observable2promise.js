const { create } = require('rxjs').Observable;

create(observer => {
  observer.next(Math.random());
  observer.next(Math.random());
  observer.next(Math.random());
  observer.complete();
})
  .toPromise()
  .then(data => console.log(data));
