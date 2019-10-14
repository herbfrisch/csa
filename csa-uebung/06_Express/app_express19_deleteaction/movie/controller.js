const model = require('./model');
const view = require('./view');
const form = require('./form');

function listAction(request, response) {
  const movies = model.getAll();
  const body = view(movies);
  response.send(body);
}

function deleteAction(request, response) {
  const id = parseInt(request.params.id, 10);
  model.delete(id);
  response.redirect('/movie/');
}

function formAction(request, response) {
  let movie = { id: '', title: '', year: '' };

  if (request.params.id) {
    movie = model.get(parseInt(request.params.id, 10));
  }

  const body = form(movie);
  response.send(body);
}

module.exports = {
  listAction,
  deleteAction,
  formAction,
};
