const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

// Get a random number from 0 and 100.
const magicNumber = Math.ceil(Math.random() * 100);
var guesses = [];

function displayCurrentGuesses() {
  let returnString = 'Your current guesses are: ';
  guesses.forEach((element) => {
    returnString += element;
    returnString += ' ';
  });
  console.log(returnString);
}

// Guess the number.
function play() {
  rl.question('Guess the number: ', (answer) => {
    guesses.push(answer);

    console.log('Your answer is: ' + answer);
    if (isNaN(Number(answer))) {
      console.log('Illegal input value');
    }

    displayCurrentGuesses();

    if (Number(answer) === magicNumber) {
      console.log('You found the right number! Congratulations.');
      rl.close();
      return;
    } else if (Number(answer) > magicNumber) {
      console.log('Guess lower.');
    } else {
      console.log('Guess higher.');
    }
    play();

  });
}

// Main
play();
