const { observeOn } = require('rxjs/operators');
const { of, queueScheduler, asapScheduler, asyncScheduler } = require('rxjs');

console.log('start');
of('queueScheduler')
  .pipe(observeOn(queueScheduler))
  .subscribe(data => console.log(data));
of('asyncScheduler')
  .pipe(observeOn(asyncScheduler))
  .subscribe(data => console.log(data));
of('asapScheduler')
  .pipe(observeOn(asapScheduler))
  .subscribe(data => console.log(data));

console.log('end');
