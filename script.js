// computerPlay created so that it choses randomly between the choices array
const choices = ["rock", "paper", "scissors"];
function computerPlay() {
  const randomChoice = Math.floor(Math.random() * choices.length);
  const result = choices[randomChoice];
  return result;
}
//playRound made to get the result for one round\
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === computerSelection) {
    return "Tis a tie";
  }
}

function game() {
  let askQuestion1 = prompt("choose between rock paper and scissors");
  const playerSelection1 = askQuestion1.toLowerCase();
  const computerSelection1 = computerPlay();
  console.log(playRound(playerSelection1, computerSelection1));
  let askQuestion2 = prompt("choose between rock paper and scissors");
  const playerSelection2 = askQuestion2.toLowerCase();
  const computerSelection2 = computerPlay();
  console.log(playRound(playerSelection2, computerSelection2));
  let askQuestion3 = prompt("choose between rock paper and scissors");
  const playerSelection3 = askQuestion3.toLowerCase();
  const computerSelection3 = computerPlay();
  console.log(playRound(playerSelection3, computerSelection3));
  let askQuestion4 = prompt("choose between rock paper and scissors");
  const playerSelection4 = askQuestion4.toLowerCase();
  const computerSelection4 = computerPlay();
  console.log(playRound(playerSelection4, computerSelection4));
  let askQuestion5 = prompt("choose between rock paper and scissors");
  const playerSelection5 = askQuestion5.toLowerCase();
  const computerSelection5 = computerPlay();
  console.log(playRound(playerSelection5, computerSelection5));
}
console.log(game());
