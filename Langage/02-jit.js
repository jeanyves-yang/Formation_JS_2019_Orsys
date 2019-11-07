function sum(a, b) {
  return a + b;
}

console.time('sum');
sum(1,2);
console.timeEnd('sum');

// Much faster
console.time('sum');
sum(1,2);
console.timeEnd('sum');
