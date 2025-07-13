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
    result.textContent = `You Win! Computer chose ${computerChoice}. Score Human: ${++humanScore} Computer: ${computerScore}`;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Rock") ||
    (humanChoice === "Paper" && computerChoice === "Paper") ||
    (humanChoice === "Scissors" && computerChoice === "Scissors")
  ) {
    result.textContent = `It's a draw. Computer chose ${computerChoice}. Score Human: ${humanScore} Computer: ${computerScore}`;
  } else {
    result.textContent = `You Lose! Computer chose ${computerChoice}. Score Human: ${humanScore} Computer: ${++computerScore}`;
  }

  if (humanScore === 5) {
    result.textContent = "User Wins!";
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    result.textContent = "Computer Wins!";
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


/* function getComputerChoice() {
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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

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
 */
