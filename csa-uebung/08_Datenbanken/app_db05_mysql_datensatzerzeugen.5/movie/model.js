const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test',
  database: 'movie-db',
});

connection.connect();

function getAll() {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM Movies';
    connection.query(query, (error, results) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

function insert(movie) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO Movies (title, year) VALUES (?, ?)';
    connection.query(query, [movie.title, movie.year], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = {
  getAll,
  get(id) {},
  delete(id) {},
  save(movie) {
    if (!movie.id) {
      return insert(movie);
    }
  },
};
