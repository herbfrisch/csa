function deleteAddress(addresses, id) {
  const index = addresses.findIndex(address => address.id === parseInt(id));
  addresses.splice(index, 1);
  return addresses;
}

module.exports = deleteAddress;
