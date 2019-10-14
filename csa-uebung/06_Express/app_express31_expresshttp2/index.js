const spdy = require('spdy');
const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const movieRouter = require('./movie');

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (request, response) => response.redirect('/movie'));

app.use(morgan('common', { immediate: true }));

app.use('/movie', movieRouter);

const options = {
  key: fs.readFileSync('./cert/localhost.key'),
  cert: fs.readFileSync('./cert/localhost.cert'),
};

spdy.createServer(options, app).listen(8080, () => {
  console.log('Server is listening to https://localhost:8080');
});
