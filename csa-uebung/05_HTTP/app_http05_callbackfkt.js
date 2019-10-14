const myObj = {
  myMethod() {
    setTimeout(function() {
      console.log(this);
    });
  },
};

myObj.myMethod();
