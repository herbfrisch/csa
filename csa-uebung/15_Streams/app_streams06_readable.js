const Readable = require('stream').Readable;

class ReadStream extends Readable {
  _read() {
    this.push('Hello World');
  }
}
