const model = require('./model');
const view = require('./view');
const form = require('./form');

function listAction(request, response) {
  model.getAll().then(
    movies => {
      response.render(__dirname + '/views/list', { movies });
    },
    error => response.send(error),
  );
}

function deleteAction(request, response) {
  const id = parseInt(request.params.id, 10);
  model.delete(id);
  response.redirect(request.baseUrl);
}

function formAction(request, response) {
  let movie = { id: '', title: '', year: '' };

  if (request.params.id) {
    movie = model.get(parseInt(request.params.id, 10));
  }

  const body = form(movie);
  response.send(body);
}

function saveAction(request, response) {
  const movie = {
    id: request.body.id,
    title: request.body.title,
    year: request.body.year,
  };
  model.save(movie);
  response.redirect(request.baseUrl);
}

module.exports = {
  listAction,
  deleteAction,
  formAction,
  saveAction,
};
