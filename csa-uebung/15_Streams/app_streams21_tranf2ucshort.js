const fs = require('fs');
const read = fs.createReadStream('input.txt');
const write = fs.createWriteStream('output.txt');

const toUpperCase = new require('stream').Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

read.pipe(toUpperCase).pipe(write);
