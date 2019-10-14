function getForm(addresses, id) {
  let address = {
    id: '',
    firstname: '',
    lastname: '',
    street: '',
    city: '',
    country: '',
  };
  if (id) {
    address = addresses.find(adr => adr.id === parseInt(id, 10));
  }
  const form = `<!DOCTYPE html>
<html>
  <head>
    <title>Adressbuch</title>
    <meta charset="utf-8">
  </head>
  <body>
    <form action="/save" method="POST">
      <input type="hidden" id="id" name="id" value="${address.id}" />
      <div>
        <label for="firstname">firstname</label>
        <input type="text" id="firstname" name="firstname" value="${
          address.firstname
        }" />
      </div>
      <div>
        <label for="lastname">lastname</label>
        <input type="text" id="lastname" name="lastname" value="${
          address.lastname
        }" />
      </div>
      <div>
        <label for="street">street</label>
        <input type="text" id="street" name="street" value="${
          address.street
        }" />
      </div>
      <div>
        <label for="city">city</label>
        <input type="text" id="city" name="city" value="${address.city}" />
      </div>
      <div>
        <label for="country">country</label>
        <input type="text" id="country" name="country" value="${
          address.country
        }" />
      </div>
      <div>
        <button type="submit">speichern</button>
      </div>
    </form>
  </body>
</html>`;
  return form;
}
module.exports = getForm;
