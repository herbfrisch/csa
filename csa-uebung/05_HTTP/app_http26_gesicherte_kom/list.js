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
            <td>Bild</td><td>id</td><td>Vorname</td><td>Nachname</td><td>löschen</td><td>bearbeiten</td>
          </tr>
          ${addresses.map(createRow).join('')}
        </table>
        <a href="/new">neu</a>
      </body>
    </html>`;
}

function createRow(address) {
  const img = address.file
    ? `<img src="${address.file}" height="20" width="20">`
    : '';

  return `<tr>
    <td>${img}</td>
    <td>${address.id}</td>
    <td>${address.firstname}</td>
    <td>${address.lastname}</td>
    <td><a href="/delete/${address.id}">löschen</a></td>
    <td><a href="/edit/${address.id}">bearbeiten</a></td>
  </tr>`;
}

module.exports = getList;
