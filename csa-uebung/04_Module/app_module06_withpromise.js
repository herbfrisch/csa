process.on('unhandledRejection', function(e) {
  console.error(e);
});

function withPromise() {
  return Promise.reject('Hoppla, da ist ein Fehler passiert!');
}

withPromise().then(function() {
  console.log('Promise erfolgreich gelöst!');
});
