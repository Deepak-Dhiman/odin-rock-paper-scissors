// Gets computer choice
function getComputerChoice() {
  if (Math.floor(Math.random() * 3) === 0) {
    return "Rock";
  } else if (Math.floor(Math.random() * 3) === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Gets human choice
function getHumanChoice() {
  return prompt("Enter your choice!", "");
}

// Main calling function
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // Main game logic
  function playRound(humanChoice, computerChoice) {
    humanChoice =
      humanChoice.slice(0, 1).toUpperCase() +
      humanChoice.slice(1).toLowerCase();

    if (
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
      return `You Win! Computer chose ${computerChoice}. ${humanChoice} beats ${computerChoice}. Score Human: ${++humanScore} Computer: ${computerScore}`;
    } else if (
      (humanChoice === "Rock" && computerChoice === "Rock") ||
      (humanChoice === "Paper" && computerChoice === "Paper") ||
      (humanChoice === "Scissors" && computerChoice === "Scissors")
    ) {
      return `It's a draw. Computer chose ${computerChoice}. Score Human: ${humanScore} Computer: ${computerScore}`;
    } else {
      return `You Lose! Computer chose ${computerChoice}. ${computerChoice} beats ${humanChoice}. Score Human: ${humanScore} Computer: ${++computerScore}`;
    }
  }

  for (let i = 0; i < 5; i++) {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
  }

  if (humanScore > computerScore) {
    return `You won!. Final score => Human: ${humanScore} Computer: ${computerScore}`;
  } else if (humanScore === computerScore) {
    return `It's a draw. Final score => Human: ${humanScore} Computer: ${computerScore}`;
  } else {
    return `You lost! Final score => Human: ${humanScore} Computer: ${computerScore}`;
  }
}

console.log(playGame());
