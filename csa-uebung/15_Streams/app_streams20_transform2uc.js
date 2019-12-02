const fs = require('fs');
const read = fs.createReadStream('input.txt');
const write = fs.createWriteStream('output.txt');

const Transform = require('stream').Transform;

class ToUpperCase extends Transform {
  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
}

const toUpperCase = new ToUpperCase();
read.pipe(toUpperCase).pipe(write);
