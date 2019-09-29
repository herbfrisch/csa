myObj.on('myEvent', function(data) {
  console.log(data);
});
myObj.emit('myEvent', 'Hello World');
