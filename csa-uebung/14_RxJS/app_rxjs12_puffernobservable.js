const { interval } = require('rxjs');
const { map, buffer } = require('rxjs/operators');

interval(100)
  .pipe(
    map(() => Math.floor(Math.random() * 100)),
    buffer(interval(1000)),
  )
  .subscribe(data => console.log(data));
