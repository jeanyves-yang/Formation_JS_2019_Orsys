const numbers = [2, 3, 4];
const numbers2 = [2, 3, 4];

// Display the square of the even numbers in the array

// Paradigm imperative
console.time('imperative');
for (let i = 0; i < numbers.length; i=i+2) {
  const element = numbers[i];
  // if (element % 2 === 0) {
    const nbPair = element;
    console.log(nbPair ** 2);
  // }
}
console.timeEnd('imperative');

console.time('functional');
// Paradigm functional (ES5)
numbers2
  .filter((nb) => nb % 3 === 0)
  .map((evenNb) => evenNb ** 2)
  .forEach((SquaredEvenNb) => console.log(SquaredEvenNb));
  console.timeEnd('functional');
