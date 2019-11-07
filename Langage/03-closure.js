
const globalOrModule = 'globalOrModule';
// Nested functions
function externe() {
  const closure = 'closure';
  function interne() {
    const local = 'local';
    console.log(local);
    console.log(closure);
    console.log(globalOrModule);
  }
  interne();
}

externe();
console.log('typeof externe', typeof externe); // function
console.log('typeof interne', typeof interne); // undefined
