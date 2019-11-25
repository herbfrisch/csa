const { from } = require('rxjs');
const { readFile } = require('fs').promises;

from(readFile('input.txt', 'utf-8')).subscribe(content =>
  console.log('file content: ', content),
);
