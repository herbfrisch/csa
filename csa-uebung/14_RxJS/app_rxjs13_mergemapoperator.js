const { create } = require('rxjs').Observable;
const { mergeMap } = require('rxjs/operators');

const resources = () => {
  return create(observer => {
    observer.next({
      id: 1,
      name: 'Main resource',
      user: 2,
    });
  });
};

const usersForResource = resource => {
  return create(observer => {
    observer.next({
      ...resource,
      user: {
        id: 2,
        name: 'Klaus',
      },
    });
  });
};

resources()
  .pipe(mergeMap(resource => usersForResource(resource)))
  .subscribe(data => console.log(data));
