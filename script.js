const computerPlayer = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};

let playerScore = 0;
let computerScore = 0;

const roundStart = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection.toLowerCase()) {
    return "No winner try again";
  } else if (
    (playerSelection === "rock" && computerSelection === "Scissors") ||
    (playerSelection === "paper" && computerSelection === "Rock") ||
    (playerSelection === "scissors" && computerSelection === "Paper")
  ) {
    playerScore++;
    return `you win : ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `you lose : ${computerSelection} beats ${playerSelection}`;
  }
};

function game() {
  for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt(
      `Round ${i}: Choose Rock, Paper, or Scissors`
    );
    const computerSelection = computerPlayer();
    const result = roundStart(playerSelection, computerSelection);
    console.log(result);
  }

  if (playerScore > computerScore) {
    console.log(
      `You won the game! Final score: Your ${playerScore} : computer ${computerScore}`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `You lost the game! Final score: Your ${playerScore} : computer ${computerScore}`
    );
  } else {
    console.log(
      `It's a tie! Final score: Your ${playerScore} : computer ${computerScore}`
    );
  }
}
game();
