var readable = new require('stream').Readable({
  objectMode: true,

  read() {
    this.emitValue();
  },
});
readable.items = 0;
readable.maxItems = 10;
readable.emitValue = () => {
  setTimeout(() => {
    if (readable.items++ < readable.maxItems) {
      readable.push(readable.createValue());
    } else {
      readable.push(null);
    }
  }, Math.floor(Math.random() * 5) * 1000);
};
readable.createValue = () => {
  return {
    date: new Date(),
    temp: Math.floor(Math.random() * 1000 - 273) + '°C',
  };
};
readable.on('readable', function() {
  let value;
  while (null !== (value = readable.read())) {
    console.log(JSON.stringify(value));
  }
});
