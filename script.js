// computerPlay created so that it choses randomly between the choices array
const choices = ["rock", "paper", "scissors"];
function computerPlay() {
  const randomChoice = Math.floor(Math.random() * choices.length);
  const result = choices[randomChoice];
  return result;
}
