// computerPlay created so that it choses randomly between the choices array
const choices = ["rock", "paper", "scissors"];
function computerPlay() {
  const randomChoice = Math.floor(Math.random() * choices.length);
  const result = choices[randomChoice];
  return result;
}
//playRound made to get the result for one round
let playerWins = 0;
let computerWins = 0;
let ties = 0;
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerWins++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerWins++;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerWins++;
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerWins++;
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerWins++;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerWins++;
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === computerSelection) {
    ties++;
    return "Tis a tie";
  }
}
//Takes click event of .btn class and puts the text inside playGame function
const btns = document.querySelectorAll("button");
btns.forEach(function playGame(btn) {
  btn.addEventListener("click", (e) => {
    const computerSelection = computerPlay();
    const playerSelection = e.target.innerHTML.toLowerCase();
    if (playerWins < 5 && computerWins < 5) {
      document.getElementById("round-results").innerHTML = playRound(
        playerSelection,
        computerSelection
      );
      document.getElementById("computer-score").innerHTML = computerWins;
      document.getElementById("player-score").innerHTML = playerWins;
      document.getElementById("ties").innerHTML = ties;
    }
    if (playerWins === 5) {
      document.getElementById(
        "winner"
      ).innerHTML = `<div style="color: #00B32C;"> You win </div>
      <a style="text-decoration: none; font-size: 24px; color: #00B32C;" href="index.html">Play again</a>`;
    } else if (computerWins === 5) {
      document.getElementById(
        "winner"
      ).innerHTML = `<div style="color: #E40010	;">Computer Wins </div> 
      <a style="text-decoration: none; font-size: 24px; color: #E40010;" href="index.html" sty>Play again</a>`;
    }
  });
});
