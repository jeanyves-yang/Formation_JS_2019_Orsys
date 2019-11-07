function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const randomLib = {
  randomIntInclusive: getRandomIntInclusive,
  randomInt: getRandomInt,
  randomArbitrary: getRandomArbitrary
};

const readline = require('readline');

class Game {
  constructor(options) {
    /*this.min = 0;
    this.max = 100;

    this.min = options.min;
    this.max = options.max;*/

    // better:
    const { min = 0, max = 100 } = options;

    this.rl = readline.createInterface(process.stdin, process.stdout);

    // Get a random number from 0 and 100.
    this.magicNumber = randomLib.randomIntInclusive(min, max);
    this.guesses = [];
  }
  play() {
    this.rl.question('Guess the number: ', (answer) => {
      this.guesses.push(answer);

      console.log('Your answer is: ' + answer);
      if (isNaN(Number(answer))) {
        console.log('Illegal input value');
      }

      console.log(this.guesses);
      if (Number(answer) === this.magicNumber) {
        console.log('You found the right number! Congratulations.');
        this.rl.close();
        return;
      } else if (Number(answer) > this.magicNumber) {
        console.log('Guess lower.');
      } else {
        console.log('Guess higher.');
      }
      this.play();
    });
  }
}
const game = new Game({
  min: 0,
  max: 100,
});
game.play();
