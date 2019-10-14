const http = require('http');

const addresses = [
  {
    id: 1,
    firstname: 'James',
    lastname: 'Bond',
    street: '12 Millbank',
    city: 'London',
    country: 'Great Britain',
  },
  {
    id: 2,
    firstname: 'Sherlock',
    lastname: 'Holmes',
    street: '221b Baker St',
    city: 'London',
    country: 'Great Britain',
  },
];

http
  .createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'text/html' });
    const responseBody = `<!DOCTYPE html>
    <html>
      <head>
        <title>Adressbuch</title>
      </head>
      <body>
        <h1>Adressbuch</h1>
        <table>
          <tr>
            <td>Id</td>
            <td>Vorname</td>
            <td>Nachname</td>
          </tr>
          ${addresses.map(createRow).join('')}
        </table>
      </body>
    </html>`;
    response.end(responseBody);
  })
  .listen(8080, () =>
    console.log('Adressbuch erreichbar unter http://localhost:8080'),
  );

function createRow(address) {
  return `<tr>
    <td>${address.id}</td>
    <td>${address.firstname}</td>
    <td>${address.lastname}</td>
  </tr>`;
}
