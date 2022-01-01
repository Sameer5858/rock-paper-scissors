// computerPlay created so that it choses randomly between the choices array
const choices = ["rock", "paper", "scissors"];
function computerPlay() {
  const randomChoice = Math.floor(Math.random() * choices.length);
  const result = choices[randomChoice];
  return result;
}
//playRound made to get the result for one round
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
//5 set game
function game() {
  for (let i = 0; i < 5; i++) {
    let askQuestion = prompt("choose between rock paper and scissors");
    const playerSelection = askQuestion.toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}
//Takes click event of .btn class and puts the text inside playGame function
const btns = document.querySelectorAll(".btn");
btns.forEach(function playGame(btn) {
  btn.addEventListener("click", (e) => {
    const computerSelection = computerPlay();
    const playerSelection = e.target.innerHTML.toLowerCase();
    document.getElementById("results").innerHTML += `${playRound(
      playerSelection,
      computerSelection
    )} <br>`;
  });
});
