const { create } = require('rxjs').Observable;
const { defaultIfEmpty } = require('rxjs/operators');

create(observer => {
  observer.complete();
})
  .pipe(defaultIfEmpty('Observable did not emit a value'))
  .subscribe(data => console.log(data));
