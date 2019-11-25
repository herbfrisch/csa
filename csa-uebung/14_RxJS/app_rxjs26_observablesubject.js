const {
  Observable: { create },
  Subject,
} = require('rxjs');

const observable = create(observer => {
  setTimeout(() => {
    observer.next(Math.random());
  }, 1000);
});

observable.subscribe(data => console.log('Observer 1: ', data));
observable.subscribe(data => console.log('Observer 2: ', data));

const subject = new Subject();

subject.subscribe(data => console.log('Subject observer 1:', data));
subject.subscribe(data => console.log('Subject observer 2:', data));

subject.next(Math.random());
