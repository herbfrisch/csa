const express = require('express');
const movieRouter = require('./movie');

const app = express();

app.get('/', (request, response) => response.redirect('/movie'));

function log(request, response, next) {
  console.log(request.url);
  next();
}
app.use(log);

app.use('/movie', movieRouter);

app.listen(8080, () => {
  console.log('Server is listening to http://localhost:8080');
});
