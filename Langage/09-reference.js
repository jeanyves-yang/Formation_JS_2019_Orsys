const s1 = 'Jean';
let s2 = s1;
s2 = 'Eric';
console.log(s1);

// object litteral
const o1 = { s: 'Jean' };
const o2 = o1;
o2.s = 'Eric';

console.log(o1.s);

// bad practice:
// const coordsA = {
//   x: 1,
//   y: 2,
//   sumXY: function() {
//     return this.x + this.y;
//   }
// };
// const coordsB = {
//   x: 2,
//   y: 3,
//   sumXY: function() {
//     return this.x + this.y;
//   }
// };
// sumXY is duplicated for each object
// Good practice:
// constructor function
class Coords {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  sumXY() {
    return this.x + this.y;
  }
}


const coordsA = new Coords(1, 2);
const coordsB = new Coords(2, 3);

console.log(coordsA.sumXY());
