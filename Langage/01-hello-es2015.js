// Module IIFE
// Immediately Invoked Function Expression, not required anymore now
//(function() {
  /**
   * A function that returns a hello string
   * @param {string} name Name
   * @return {string} a hello string
   */
function hello(name) {
  return `Hello ${name}`;
}

const names = ['Romain', 'Jean'];

names.forEach((name) => {
  console.log(hello(name));
});
//}())

