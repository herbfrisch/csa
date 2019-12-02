const fs = require('fs');

const options = {
  encoding: 'utf8',
};

const readStream = fs.createReadStream('gibt-es-nicht.txt', options);

readStream.on('readable', () => {
  console.log(readStream.read());
});
readStream.on('close', () => {
  console.log('Der Stream wurde geschlossen');
});
readStream.on('error', e => {
  console.error('Es ist ein Fehler aufgetreten: ', e);
});
