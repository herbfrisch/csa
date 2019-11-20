const pattern = /^([a-zA-Z0-9])(([\-.]|[_]+)?([a-zA-Z0-9]+))*(@){1}[a-z0-9]+[.]{1}(([a-z]{2,3})|([a-z]{2,3}[.]{1}[a-z]{2,3}))$/;

console.time('valid');
console.log(pattern.test('aaa@bbb.cc'));
console.timeEnd('valid');

console.time('invalid short');
console.log(pattern.test('aaa!'));
console.timeEnd('invalid short');

console.time('invalid long');
console.log(pattern.test('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!'));
console.timeEnd('invalid long');
