const Writable = require('stream').Writable;
class WriteStream extends Writable {
  _write(chunk, enc, done) {
    console.log('WRITE: ', chunk.toString());
    done();
  }
}

const ws = new WriteStream();
for (let i = 0; i < 10; i++) {
  ws.write('Hello ' + i);
}
ws.end();
