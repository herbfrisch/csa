const { create } = require('rxjs').Observable;
const { map, catchError } = require('rxjs/operators');

create(observer => {
  observer.next('test 1');
  observer.next('test 2');
  observer.error('something went wrong');
  observer.next('test 3');
})
  .pipe(
    map(data => {
      const mappedData = data.toUpperCase();
      // throw new Error('Mapping failed');
      return mappedData;
    }),
    catchError(e => console.log('the error was: ', e)),
  )
  .subscribe(data => console.log(data));
