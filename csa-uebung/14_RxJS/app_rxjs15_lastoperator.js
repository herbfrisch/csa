const { create } = require('rxjs').Observable;
const { last } = require('rxjs/operators');

create(observer => {
  let count = 0;
  const interval = setInterval(() => {
    if (++count >= 10) {
      clearInterval(interval);
      observer.next(count);
      observer.complete();
    }
    observer.next(count);
  }, 10);
})
  .pipe(last())
  .subscribe(data => console.log('last: ', data));
