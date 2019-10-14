const model = require('./model');
const view = require('./view');

function listAction(request, response) {
  const movies = model.getAll();
  const body = view(movies);
  response.send(body);
}

module.exports = {
  listAction,
};
