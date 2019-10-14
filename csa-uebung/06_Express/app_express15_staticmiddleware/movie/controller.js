const model = require('./model');
const view = require('./view');

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

module.exports = {
  listAction,
  deleteAction,
};
