/*
 * Rock Paper Scissors App
 * https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors#assignment
 */
// Optimize computerPlay, or at least try
// what is the relationship btwn Math.random and the number by which it's multiplied?
// how can this be altered to more randomize it, or is that even possible, advisable? 
function computerPlay(randoNum) {
  randoNum = parseInt(Math.random() * (100 - 1) + 7);
  if (randoNum > 100) {
    return randoNum - 20;
  } else if (randoNum < 1) {
    return randoNum + Math.random() * (100 - 1);
  }
  // console.log(typeof randoNum, randoNum);
  if (randoNum >= 1 && randoNum < 33) {
console.log('Rock: ', randoNum);
    return randoNum = 'rock';
  } else if (randoNum >= 34 && randoNum <= 66) {
console.log('Scissor: ', randoNum);
    return randoNum = 'scissors';
  } else if (randoNum >= 67 && randoNum <= 100) {
console.log('Paper: ', randoNum);
    return randoNum = 'paper';
  }
}
// computerPlay();

// playGame();
function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  // you want statement to return false as soon as one of your conditions turns false
  // you want your loop to run as long as both conditions are true '@riri's babybump'
  // && returns TRUE if BOTH operands are TRUTHY and FALSE otherwise.
  for (let i = 1; humanScore < 5 && computerScore < 5; i++) { 
    const computerSelection = computerPlay();

console.log('this is computerSelection: ', computerSelection);
    let humanSelection = prompt('Make a selection: Rock, Paper, or Scissors');
playRound(humanSelection, computerSelection); 
    
    function playRound(humanSelection, computerSelection) {
      humanSelection = humanSelection.toLowerCase();
  // convert to an array (or is object better?) and loop through results
      switch (true) {
        case humanSelection === 'rock' && computerSelection === 'rock':
          console.log('It\'s a tie.');
          break;
        case humanSelection === 'rock' && computerSelection === 'paper':
          console.log(`${computerSelection} SMOTHERS ${humanSelection}`);
          computerScore++;
          break;
        case humanSelection === 'rock' && computerSelection === 'scissors':
          console.log(`${humanSelection} CRUSHES ${computerSelection}`);
          humanScore++;
          break;
        
        case humanSelection === 'paper' && computerSelection === 'paper':
          console.log('It\'s a tie.');
          break;
        case humanSelection === 'paper' && computerSelection === 'scissors':
          console.log(`${computerSelection} SLICES ${humanSelection}`);
          computerScore++;
          break;
        case humanSelection === 'paper' && computerSelection === 'rock':
          console.log(`${humanSelection} SMOTHERS ${computerSelection}`);
          humanScore++;
          break;
        
        case humanSelection === 'scissors' && computerSelection === 'scissors':
          console.log('It\'s a tie.');
          break;
        case humanSelection === 'scissors' && computerSelection === 'rock':
          console.log(`${computerSelection} CRUSHES ${humanSelection}`);
          computerScore++;
          break;
        case humanSelection === 'scissors' && computerSelection === 'paper':
          console.log(`${humanSelection} SLICES ${computerSelection}`);
          humanScore++;
          break;
      }

      console.log(`humanScore: ${humanScore}`);
      console.log(`computerScore: ${computerScore}`);

  return `${humanSelection} and ${computerSelection}`;
    } // playRound
    playRound(humanSelection, computerSelection);
    console.log(`This is humanSelection ${humanSelection}`);
    console.log(`This is computerSelection ${computerSelection}`);
  } // for loop
} // playGame

// get random integer
// function getRandoInt(max, min) {
//   // return randoInt = .4053117146711769 * (10 - 1) + 1;
//   let someInt = Math.random(); // 3353563462989505 Math.random()
//   const randInt = someInt * (10 - 1) + 1;
//   return randoInt = Math.random() * (max - min) + 1;
// }
// getRandoInt();
// .4053117146711769 * (10 - 1) + 1 

// Arrays
// https://www.w3schools.com/js/js_arrays.asp
const person = {
  firstName: 'Lester',
  lastName: 'Carpenter',
  age: 56
};
// console.log(person.firstName + ' ' + person.lastName + ' is ' + person.age + ' years old.');

const manypersons = [
  person.firstName,
  function myFunction() { console.log('This is my function') },
  person // refers to the OBJECT defined above.
];
let person2 = manypersons[manypersons.length - 1]; // .length -1 returns LAST ELEMENT in array
// console.log('This is an object: ', person2); // consoles 'person' OBJECT
// console.log('the person2 variable is a "typeof": ', typeof(person2)) // consoles 'object'

const fruits = ['banana', 'orange', 'apple', 'mango'];
let fruit = fruits[fruits.length - 1];

// for loop with array
// save <ul> in var
// DUH! I need the LENGTH of the array to know how many to loop through
// I also need to reference the array[i] which would be each indiv item 
// initialize counter i to zero;
// if i is less than the array length... increment i counter
// concat list elem to array's contents reference (bracket notation and i counter)
const personLength = manypersons.length;
let personList = '<ul>';
for (i = 0; i < personLength; i++) { // can never remember if I start loop w one or zero
  personList += '<li>' + manypersons[i] + '</li>';
}
personList += '</ul>';
// console.log(personList);