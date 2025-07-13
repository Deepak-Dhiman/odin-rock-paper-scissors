function getComputerChoice() {
  if (Math.floor(Math.random() * 3) === 0) {
    return "Rock";
  } else if (Math.floor(Math.random() * 3) === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    result.textContent = `You Win! Computer chose ${computerChoice}. Human Score: ${++humanScore} Computer Score: ${computerScore}`;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Rock") ||
    (humanChoice === "Paper" && computerChoice === "Paper") ||
    (humanChoice === "Scissors" && computerChoice === "Scissors")
  ) {
    result.textContent = `It's a draw. Computer chose ${computerChoice}. Human Score: ${humanScore} Computer Score: ${computerScore}`;
  } else {
    result.textContent = `You Lose! Computer chose ${computerChoice}. Human Score: ${humanScore} Computer Score: ${++computerScore}`;
  }

  if (humanScore === 5) {
    result.textContent = `Ultimate Winner! = You. Final Score => Human: ${humanScore} Computer: ${computerScore}. Click the buttons to play again.`;
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    result.textContent = `Ultimate Winner! = Computer. Final Score => Human: ${humanScore} Computer: ${computerScore}. Click the buttons to play again.`;
    humanScore = 0;
    computerScore = 0;
  }
}

let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");

rock.addEventListener("click", () => {
  playRound("Rock", getComputerChoice());
});
paper.addEventListener("click", () => {
  playRound("Paper", getComputerChoice());
});
scissors.addEventListener("click", () => {
  playRound("Scissors", getComputerChoice());
});
