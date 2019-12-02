const duplex = new require('stream').Duplex({
  read() {
    this.push(chunk);
  },
  write(chunk, encoding, next) {
    next();
  },
});
