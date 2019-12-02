const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

const data = ['Hallo', 'Welt'];

data.forEach(item => {
  writeStream.write(item + '\n');
});

writeStream.end(null);
