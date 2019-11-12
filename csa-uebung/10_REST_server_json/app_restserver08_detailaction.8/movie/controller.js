const model = require('./model');

function getLinks(current, base) {
  const links = [
    { rel: 'base', href: base + '/' },
    { rel: 'sort-ascending', href: base + '/?sort=asc' },
    { rel: 'sort-descending', href: base + '/?sort=desc' },
  ];
  return links.map(link => {
    if (current.length > 0 && link.rel.includes(current)) {
      link.rel = 'self';
    } else if (current.length === 0 && link.rel === 'base') {
      link.rel = 'self';
    }
    return link;
  });
}

function listAction(request, response) {
  const options = {
    userId: 1,
    sort: request.query.sort ? request.query.sort : '',
  };
  model.getAll(options).then(
    movies => {
      const moviesResponse = {
        movies,
        links: getLinks(options.sort, request.baseUrl),
      };
      response.json(moviesResponse);
    },
    error => response.status(500).json(error),
  );
}

function detailAction(request, response) {
  console.log('detail');
  model.get(request.params.id, 1).then(
    movie => {
      const movieResponse = {
        ...movie,
        links: [{ rel: 'self', href: request.baseUrl + '/' }],
      };
      response.json(movieResponse);
    },
    error => response.status(500).json(error),
  );
}

function deleteAction(request, response) {
  const id = parseInt(request.params.id, 10);
  model
    .delete(id, request.user.id)
    .then(
      () => response.redirect(request.baseUrl),
      error => response.send(error),
    );
}

function formAction(request, response) {
  let movie = { id: '', title: '', year: '', public: '' };

  if (request.params.id) {
    model
      .get(parseInt(request.params.id, 10), request.user.id)
      .then(movie => response.send(form(movie)), error => response.send(error));
  } else {
    const body = form(movie);
    response.send(body);
  }
}

function saveAction(request, response) {
  const movie = {
    id: request.body.id,
    title: request.body.title,
    year: request.body.year,
    public: request.body.public === '1' ? 1 : 0,
  };
  model.save(movie, request.user.id).then(
    () => {
      response.redirect(request.baseUrl);
    },
    error => {
      response.send(error);
    },
  );
}

function rateAction(request, response) {
  const rating = {
    movie: parseInt(request.params.movie, 10),
    user: request.user.id,
    rating: parseInt(request.params.rating, 10),
  };
  model.rate(rating).then(
    () => response.redirect(request.baseUrl),
    error => {
      console.log(error);
      response.send(error);
    },
  );
}

module.exports = {
  listAction,
  detailAction,
  deleteAction,
  formAction,
  saveAction,
  rateAction,
};
