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

function playRound(humanChoice, computerChoice) {
  humanChoice =
    humanChoice.slice(0, 1).toUpperCase() + humanChoice.slice(1).toLowerCase();

  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return `You Win! ${humanChoice} beats ${computerChoice}`;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Rock") ||
    (humanChoice === "Paper" && computerChoice === "Paper") ||
    (humanChoice === "Scissors" && computerChoice === "Scissors")
  ) {
    return "It's a draw.";
  } else {
    return `You Lose! ${computerChoice} beats ${humanChoice}`;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

console.log(computerSelection);
console.log(playRound(humanSelection, computerSelection));
