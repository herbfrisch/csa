const fs = require('fs');
const writeStream = fs.createWriteStream('output.txt');

const data = 'Node.js is great';

let i = 1000000;
write();
function write() {
  let ok = true;
  do {
    i -= 1;
    if (i === 0) {
      writeStream.end(data);
    } else {
      ok = writeStream.write(data);
    }
  } while (i > 0 && ok);
  if (i > 0) {
    console.log('wait');
    writeStream.once('drain', write);
  }
}
