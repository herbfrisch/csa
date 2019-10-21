const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test',
  database: 'movie-db',
});

connection.connect();

function getAll() {}

module.exports = {
  getAll() {},
  get(id) {},
  delete(id) {},
  save(movie) {},
};
