function timeout(delayMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delayMs);
    }, delayMs);
  });
}

timeout(1000).then((delay) => console.log(`${delay} ms`));

(async () => {
  const delay = await timeout(2000);
  console.log(`${delay} ms`);
})();

// Issue: cannot work with setInterval (promises only work at the first action)

// -> Need observable

const { Observable } = require('rxjs');

function interval(delayMs) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next(delayMs);
    }, delayMs);
  });
}

interval(1000).subscribe((delay) => console.log("observable: " + delay + ' ms'));
