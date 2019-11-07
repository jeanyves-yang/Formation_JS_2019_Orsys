setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1500);
setTimeout(() => console.log('D'), 1000);
console.log('E');

// E B A D C
