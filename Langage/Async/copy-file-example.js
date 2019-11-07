function hello(n1, n2) {
  return `Hello ${n1}, ${n2}, my name is ${this.name}`;
}

console.log(hello('Jean', 'Eric'));

// We can tell who is the "this"
const contact = { name: 'Toto' };
console.log(hello.call(contact, 'Jean', 'Eric'));
console.log(hello.apply(contact, ['Jean', 'Eric']));
console.log(hello.call(contact, ...['Jean', 'Eric']));

// This is bound to contact
const helloContact = hello.bind(contact);
console.log(helloContact('Jean', 'Eric'));
