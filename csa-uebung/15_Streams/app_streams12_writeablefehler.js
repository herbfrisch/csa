const fs = require('fs');

const writeStream = fs.createWriteStream('/usr/sbin/test.txt');

writeStream.on('error', err => {
  console.error('Ein Fehler ist aufgetreten: ', err);
});
