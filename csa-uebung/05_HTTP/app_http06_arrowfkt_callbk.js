const myObj = {
  myMethod() {
    setTimeout(() => console.log(this));
  },
};

myObj.myMethod();
