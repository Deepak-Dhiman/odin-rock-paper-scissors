function getComputerChoice() {
  if (Math.floor(Math.random() * 3) === 0) {
    return "Rock";
  } else if (Math.floor(Math.random() * 3) === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  return prompt("Enter your choice!", "");
}

let humanScore = 0;
let computerScore = 0;


