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

module.exports = {
  getAll,
  get(id) {},
  delete(id) {},
  save(movie) {},
};
