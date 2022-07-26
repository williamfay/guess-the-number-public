const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
//Initialize (Set initial values in global scope)
const MIN = 1;
const MAX = 100;

console.log(
  "Let's play a game where you (human) make up a number and I (computer) try to guess it.\n"
);
async function instruction() {
  let hiddenNumberStr = await ask(`Pick a number between 1 and 100. Type your number below and press 'enter'. Don't worry, I won't look at your number.`);
  let hiddenNumber = parseInt(hiddenNumberStr);
  if (hiddenNumber >= MIN && hiddenNumber <= MAX) {
    console.log(`Your number is ${hiddenNumber}.`);
    return hiddenNumber;
  } else {
    console.log(`Invalid number.`);
  }
}

async function guessing(lowerBoundary, upperBoundary, secretNumber) {
  let myGuess = Math.round((lowerBoundary + upperBoundary) / 2);
  let yesOrNo = await ask(`Is your number... ${myGuess}? Type 'Yes' or 'No'.\n`);
  // Handle yes case
  if (yesOrNo === 'yes' || yesOrNo === 'Yes') {
    // Done - CHECK if they lied - does guess equal secret number?
    if (secretNumber !== myGuess) {
      console.log('You lied. I quit');
      return;
    }
    console.log(`I guessed it!`);
    return
  }

  //If No, ask hi or low
  else if (yesOrNo === 'no' || yesOrNo === 'No') {
    // Done - CHECK if they lied
    if (secretNumber === myGuess) {
      console.log('Nice try liar! I win! HAHAHA!');
      return;
    }
    let highLow = await ask(`Is your number higher or lower than my guess?\n`);
    if (highLow === 'higher' || highLow === 'Higher') {
      // Done - CHECK if they lied
      if (myGuess > secretNumber) {
        console.log(`I know you're lying. I quit.`);
        return;
      }
      lowerBoundary = myGuess + 1;
    } else if (highLow === 'lower' || highLow === 'Lower') {
      // Done - CHECK if they lied
      if (myGuess < secretNumber) {
        console.log(`I know you're lying. I quit.`)
      }
      upperBoundary = myGuess - 1;
    }
    // CHECK if they dont type higher or lower
    console.log(`new boundaries = ${lowerBoundary}-${upperBoundary}`)
    await guessing(lowerBoundary, upperBoundary, secretNumber);
  }
  else {
    console.log('Please type yes or no')
    await guessing(lowerBoundary, upperBoundary, secretNumber);
  }
}

async function playGame() {
  let secretNumber;
  while (!secretNumber) {
    secretNumber = await instruction();
  }
  await guessing(MIN, MAX, secretNumber);
  process.exit();
}

playGame();

/* ISSUES
- Need to make the computer able to identify when I word not a value it should take, and ask human to try again
- 
