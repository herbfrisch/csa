const fs = require('fs');

const readable = fs.createReadStream('input.txt');
const writable = fs.createWriteStream('output.txt');

writable.on('pipe', readstream => {
  console.log('pipe handler called');
});

writable.on('unpipe', readstream => {
  console.log('unpipe handler called');
});

writable.on('finish', () => {
  console.log('finish handler called');
});

readable.pipe(writable);
