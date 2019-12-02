const fs = require('fs');

const options = {
  encoding: 'utf8',
};

const readStream = fs.createReadStream('input.txt', options);

readStream.on('readable', () => {
  console.log(readStream.read());
});
