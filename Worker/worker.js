const worker = new Worker('prime-number.js');
let date = Date.now();
worker.addEventListener('message', (event) => {
 console.log(event.data);
 console.log('Trouvé en : ' + ((Date.now() - date) / 1000) + 's');
 date = Date.now();
 // 4503599627370517
 // Trouvé en : 0.603s
 // ...
});