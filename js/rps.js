
// function computerPlay(compNum) {
//   if (compNum > 1 && compNum < 33) {
//     console.log('Rock is chosen');
//   } else if (compNum > 33 && compNum < 66) {
//     console.log('Paper is chosen');
//   } else if (compNum > 66 && compNum < 100) {
//     console.log('Scissors is chosen');
//   }
// }
// computerPlay();
// Begin with a function called computerPlay which will randomly return either 'Rock', 'Paper', or 'Scissors'.
https://medium.com/swlh/random-functions-a4f36b1dfd8f
function computerPlay(randoNum) {
  randoNum = parseInt(Math.random() * (100 - 1) + 7);
  if (randoNum > 100) {
    return randoNum - 20;
  } else if (randoNum < 1) {
    return randoNum + Math.random() * (100 - 1);
  }
  // console.log(typeof randoNum, randoNum);
  if (randoNum >= 1 && randoNum < 33) {
    // console.log('Rock: ', randoNum);
    return randoNum = 'rock';
  } else if (randoNum >= 34 && randoNum <= 66) {
    // console.log('Scissor: ', randoNum);
    return randoNum = 'scissors';
  } else {
    // console.log('Paper: ', randoNum);
    return randoNum = 'paper';
  }
}
// computerPlay();

// Write a function that plays one round of RPS.
// It should take two parameters, playerSelection and computerSelection.
// It should return a string stating which player won the round, "Sorry, Rock beats Scissors."
// Ensure that humanSelection is case insensitive.
// playGame();
function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  for (let i = 1; ; i++) {
    const computerSelection = computerPlay();
    // parseInt(humanScore);
    // console.log('this is computerSelection: ', computerSelection);
    const humanSelection = prompt('Make your selection: Rock, Paper, or Scissors');
    
    // playRound(humanSelection, computerSelection);
    function playRound(humanSelection, computerSelection) {
      // convert to switch stmt
      if (humanSelection === 'rock' && computerSelection === 'rock') {
        console.log('It\'s a tie');
      } else if (humanSelection === 'rock' && computerSelection === 'scissors') {
        console.log(`${humanSelection} CRUSHES ${computerSelection}`);
        humanScore++;
        // console.log(`This is humanScore ${humanScore} and this is computerScore ${computerScore}`);
      } else if (humanSelection === 'rock' && computerSelection === 'paper') {
        console.log(`${computerSelection} SMOTHERS ${humanSelection}`);
        computerScore++;
        // console.log(`This is humanScore ${humanScore} and this is computerScore ${computerScore}`);
      } else if (humanSelection === 'paper' && computerSelection === 'rock') {
        console.log(`${humanSelection} SMOTHERS ${computerSelection}`);
        humanScore++;
        // console.log(`This is humanScore ${humanScore} and this is computerScore ${computerScore}`);
      } else if (humanSelection === 'paper' && computerSelection === 'scissors') {
        console.log(`${computerSelection} SLICE ${humanSelection}`);
        computerScore++;
        // console.log(`This is humanScore ${humanScore} and this is computerScore ${computerScore}`);
      } else if (humanSelection === 'paper' && computerSelection === 'paper') {
        console.log(`${computerSelection} It\'s a tie ${humanSelection}`);
      } else if (humanSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        console.log(`${computerSelection} CRUSHES ${humanSelection}`);
      } else if (humanSelection === 'scissors' && computerSelection === 'scissors') {
        console.log(`${computerSelection} It\'s a tie ${humanSelection}`);
      } else if (humanSelection === 'scissors' && computerSelection === 'paper') {
        humanScore++;
        console.log(`${humanSelection} SLICE ${computerSelection}`);
        // console.log(`This is humanScore ${humanScore} and this is computerScore ${computerScore}`);
      }
      console.log(`humanScore: ${humanScore}`);
      console.log(`computerScore: ${computerScore}`);

      // return `${humanSelection} and ${computerSelection}`;
    }
    playRound(humanSelection, computerSelection);
    console.log(`This is computerSelection ${computerSelection}`);

    // if (humanScore >= 5) {
    //   console.log('Congratulations! You beat Hal!');
    //   break;
    // } else if (computerScore >= 5) {
    //   console.log('Congratulations! You beat the meatbag human!');
    //   break;
    // } 
  }
}
// function playRound(humanSelection, computerSelection) {
//   console.log('this is humanSelection: ', humanSelection);
// }
// function playRound(humanSelection, computerSelection) {
//   // console.log('this is humanSelection: ', humanSelection);
//   // convert to switch stmt
//   if (humanSelection === 'rock' && computerSelection === 'rock') {
//     console.log('It\'s a tie');
//   } else if (humanSelection === 'rock' && computerSelection === 'scissors') {
//     console.log(`${humanSelection} CRUSHES ${computerSelection}`);
//     humanScore++;
//     // console.log(`This is humanScore ${humanScore} and this is computerScore ${computerScore}`);
//   } else if (humanSelection === 'rock' && computerSelection === 'paper') {
//     console.log(`${computerSelection} SMOTHERS ${humanSelection}`);
//     computerScore++;
//     // console.log(`This is humanScore ${humanScore} and this is computerScore ${computerScore}`);
//   } else if (humanSelection === 'paper' && computerSelection === 'rock') {
//     console.log(`${humanSelection} SMOTHERS ${computerSelection}`);
//     humanScore++;
//     // console.log(`This is humanScore ${humanScore} and this is computerScore ${computerScore}`);
//   } else if (humanSelection === 'paper' && computerSelection === 'scissors') {
//     console.log(`${computerSelection} SLICE ${humanSelection}`);
//     computerScore++;
//     // console.log(`This is humanScore ${humanScore} and this is computerScore ${computerScore}`);
//   } else if (humanSelection === 'paper' && computerSelection === 'paper') {
//     console.log(`${computerSelection} It\'s a tie ${humanSelection}`);
//   } else if (humanSelection === 'scissors' && computerSelection === 'rock') {
//     computerScore++;
//     // console.log(`${computerSelection} CRUSHES ${humanSelection}`);
//   } else if (humanSelection === 'scissors' && computerSelection === 'scissors') {
//       console.log(`${computerSelection} It\'s a tie ${humanSelection}`);
//   } else if (humanSelection === 'scissors' && computerSelection === 'paper') {
//     humanScore++;
//     // console.log(`${humanSelection} SLICE ${computerSelection}`);
//     // console.log(`This is humanScore ${humanScore} and this is computerScore ${computerScore}`);
//   }
//   console.log(`humanScore: ${humanScore}`);
//   console.log(`computerScore: ${computerScore}`);
//   computerScore++;

//     return `${humanSelection} and ${computerSelection}`;
// }

  // playRound();
  // // const computerSelection = computerPlay();
  // // humanSelection will become a prompt but for now, enter manually.
  // const humanSelection = 'rock'; // rock scissors paper
  // console.log('This is playRound:', playRound(humanSelection.toLowerCase(), computerSelection));

// 2nd attempt at RPS
// function game2() {
//   // let humanSelection2 = prompt('Rock, Paper, or Scissors, mate?');
//   let humanScore = 0;
//   let computerScore = 0;

//   for (let i = 1; i < 5; i++) {
//     playRound(); 
//     console.log(i);
//   }
// }
// game2();
// compares each param and returns a winner
// function playRound(humanSelection2, computerSelection2) {
//   humanSelection2 = 'rock';
//   computerSelection2 = 'scissors';
//   if (humanSelection2 === 'rock') {
//     console.log('Need to increment humanScore');
//   } else if (computerSelection2 === 'scissors') {
//     console.log('Need to increment computerScore');
//   }
// }


// if (humanSelection2 === 'rock') {
//   ++humanScore;
//   console.log(humanScore);

// function gameplay(playerSelection) {
//   //First, we let the computer pick a random guess
//   let computeranswer = computerPlay();
//   let playeranswer = playerSelection.toLowerCase();
//   let Tie = "Tie";
//   let ComputerWins = "Computer Wins";
//   let YouWin = "You Win";
//   let Fail = "Fail";
//   //Logic for if you picked rock
//   if (playeranswer == "rock" && computeranswer == "Rock") {
//     return Tie;
//   } else if (playeranswer == "rock" && computeranswer == "Paper") {
//     return ComputerWins;
//   } else if (playeranswer == "rock" && computeranswer == "Scissors") {
//     return YouWin;
//   } else if (playeranswer == "paper" && computeranswer == "Paper") {
//     return Tie;
//   } else if (playeranswer == "paper" && computeranswer == "Scissors") {
//     return ComputerWins;
//   } else if (playeranswer == "paper" && computeranswer == "Rock") {
//     return YouWin;
//   } else if (playeranswer == "rock" && computeranswer == "Rock") {
//     return Tie;
//   } else if (playeranswer == "rock" && computeranswer == "Paper") {
//     return ComputerWins;
//   } else if (playeranswer == "rock" && computeranswer == "Scissors") {
//     return ComputerWins;
//   }
//   else {
//     return Fail;
//   }
// } gameplay('rock');
// console.log(gameplay('rock'));
// https://codepen.io/thomasbrown98/pen/OJOboVj?editors=0010 