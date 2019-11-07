const fs = require('fs');

// Sync
// try {
//   const content = fs.readFileSync('01-api-function.js', { encoding: 'UTF-8' });
//   fs.writeFileSync('copy-file-example.js', content);
//   console.log('Copy sync done');
// } catch(err) {
//   console.log(err.message);
// }


// Async based on node.js callback
// fs.readFile('01-api-function.js', { encoding: 'UTF-8' }, (err, content) => {
//   fs.writeFile('copy-file-example.js', content, (err) => {
//     console.log('Copy async done');
//   });
// }); --> if management of errors, can turn into a pyramid of doom / callback hell

// ASYNC => Promises
fs.promises.readFile('01-api-function.js', { encoding: 'UTF-8' })
.then((content) => fs.promises.writeFile('copy-file-example.js', content)) // able to chain because writeFile returns a promise
.then(() => console.log("Copy async promises done"))
.catch((err) => console.log(err.message)); // thus err gets all the errors of the promise chain

// ASYNC (ES 2018) => async / await
// async function that is called now (could be async function copy() {} ... copy())
(async () => {
  try {
    const content = await fs.promises.readFile('01-api-function.js');
    await fs.promises.writeFile('copy-file-example.js', content);
    console.log('copy async wait done');
  } catch (err) {
    console.log(err.message);
  }
})();
