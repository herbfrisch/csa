const request = require('request');
const fs = require('fs');

const formData = {
  firstname: 'Jason',
  lastname: 'Bourne',
  street: '1000 Colonial Farm Rd',
  city: 'Langley',
  country: 'USA',
  upload: fs.createReadStream(__dirname + '/bild.png'),
};

request.post(
  { url: 'http://localhost:8080/save', formData },
  (err, response, body) => {
    console.log(body);
  },
);
