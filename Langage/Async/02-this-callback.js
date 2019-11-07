class Contact {
  constructor(name) {
    this.name = name;
  }
  hello(n1, n2) {
    console.log(`Hello ${n1}, ${n2}, my name is ${this.name}`);
  }

  // const that = this (to use the right this, in timer)
  helloAsync(n1, n2) {
    // setTimeout(function() {
    //   console.log(`Hello ${n1}, ${n2}, my name is ${this.name}`);
    // }.bind(this), 1000);
    // best: use the arrow function (pseudo vars: this, arguments, etc. are not created)
    setTimeout(() => {
      console.log(`Hello ${n1}, ${n2}, my name is ${this.name}`);
    }, 1000);
  }

  helloAsync2(n1, n2) {
    setTimeout(() => {
      this.hello(n1, n2);
    }, 1000);
  }
}

const romain = new Contact('Romain');
romain.helloAsync2('Jean', 'Eric');
