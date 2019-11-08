// prime-nbs.js
for (let nb = 2 ** 52; nb < Number.MAX_SAFE_INTEGER; nb++) {
    let isPrime = true;
    for (let i = 2; i < Math.sqrt(nb) + 1; i++) {
    if (nb % i === 0) {
    isPrime = false;
    break;
    }
    }
    if (isPrime) {
    postMessage(nb);
    }
   }