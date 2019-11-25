const { create } = require('rxjs').Observable;
const { timeout } = require('rxjs/operators');

create(observer => {
  setTimeout(() => {
    observer.next('first package');
  }, 500);
  setTimeout(() => {
    observer.next('second package');
  }, 2000);
})
  .pipe(timeout(1000))
  .subscribe(data => console.log(data), error => console.log('error', error));
