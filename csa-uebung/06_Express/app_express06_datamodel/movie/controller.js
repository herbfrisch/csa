const model = require('./model');

function listAction(request, response) {
  response.send(model.getAll());
}

module.exports = {
  listAction,
};
