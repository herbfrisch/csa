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

function getOne(id) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM Movies WHERE id = ?';
    connection.query(query, [id], (error, results) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(results[0]);
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

function update(movie) {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE Movies SET title = ?, year = ? WHERE id = ?';
    connection.query(
      query,
      [movie.title, movie.year, movie.id],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      },
    );
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM Movies WHERE id = ?';
    connection.query(query, [id], (error, results) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
}

module.exports = {
  getAll,
  get(id) {
    return getOne(id);
  },
  delete(id) {
    return remove(id);
  },
  save(movie) {
    if (!movie.id) {
      return insert(movie);
    } else {
      return update(movie);
    }
  },
};
