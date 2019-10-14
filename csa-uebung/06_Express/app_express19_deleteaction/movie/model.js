let data = [
  { id: 1, title: 'Iron Man', year: '2008' },
  { id: 2, title: 'Thor', year: '2011' },
  { id: 3, title: 'Captain America', year: '2011' },
];

module.exports = {
  getAll() {
    return data;
  },
  get(id) {
    return data.find(movie => movie.id === id);
  },
  delete(id) {
    data = data.filter(movie => movie.id !== id);
  },
};
