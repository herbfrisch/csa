function getList(addresses) {
  return `<!DOCTYPE html>
    <html>
      <head>
        <title>Adressbuch</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="/styles/style.css" />
      </head>
      <body>
        <h1>Adressbuch</h1>
        <table>
          <tr>
            <td>id</td><td>vorname</td><td>nachname</td><td>löschen</td>
          </tr>
          ${addresses.map(createRow).join('')}
        </table>
        <a href="/new">neu</a>
      </body>
    </html>`;
}

function createRow(address) {
  return `<tr>
    <td>${address.id}</td>
    <td>${address.firstname}</td>
    <td>${address.lastname}</td>
    <td><a href="/delete/${address.id}">löschen</a></td>
    <td><a href="/edit/${address.id}">bearbeiten</a></td>
  </tr>`;
}

module.exports = getList;
