const Duplex = require('stream').Duplex;

class MyDuplex extends Duplex {
  _read(n) {
    this.push(chunk);
  }

  _write(chunk, encoding, done) {
    done();
  }
}

const myDuplex = new MyDuplex();
