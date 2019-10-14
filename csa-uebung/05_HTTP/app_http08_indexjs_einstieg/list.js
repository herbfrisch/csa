function getList(addresses) {
  return `<!DOCTYPE html>
    <html>
      <head>
        <title>Adressbuch</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1>Adressbuch</h1>
        <table>
          <tr>
            <td>Id</td><td>Vorname</td><td>Nachname</td><td>löschen</td>
          </tr>
          ${addresses.map(createRow).join('')}
        </table>
      </body>
    </html>`;
}

function createRow(address) {
  return `<tr>
    <td>${address.id}</td>
    <td>${address.firstname}</td>
    <td>${address.lastname}</td>
    <td><a href="/delete/${address.id}">löschen</a></td>
  </tr>`;
}

module.exports = getList;
