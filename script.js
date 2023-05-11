const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let exitGame = false;

const computerPlayer = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const welcome = () => {
  const confirmMessage = confirm(
    "Rock Paper Scissors game! To start, press OK"
  );

  if (!confirmMessage) {
    alert("Goodbye!");
  } else {
    alert(
      "Welcome! You need to select Rock, Paper, or Scissors to start. Press OK to continue."
    );
    playGame();
  }
};

const roundStart = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "No winner. Try again.";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
};

const inputHandler = () => {
  const errorAlert = "Invalid choice. Please choose rock, paper, or scissors.";
  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt(`Round ${i}: Choose Rock, Paper, or Scissors`);
    if (playerSelection == null) {
      const exitChoise = confirm("Are you sure you want to exit the game?");
      if (exitChoise) {
        alert("Goodbye!");
        exitGame = true;
        break;
      } else {
        i--;
      }
    } else if (playerSelection === "") {
      alert(errorAlert);
      i--;
    } else if (!choices.includes(playerSelection.toLowerCase().trim())) {
      alert(errorAlert);
      i--;
    } else {
      const computerSelection = computerPlayer();
      const result = roundStart(playerSelection, computerSelection);
      console.log(result);
    }
  }
};

const finalScore = () => {
  if (exitGame) {
    return;
  } else if (playerScore > computerScore) {
    console.log(
      `You won the game! Final score: Your ${playerScore} : Computer ${computerScore}`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `You lost the game! Final score: Your ${playerScore} : Computer ${computerScore}`
    );
  } else {
    console.log(
      `It's a tie! Final score: Your ${playerScore} : Computer ${computerScore}`
    );
  }
};

const playGame = () => {
  inputHandler();
  finalScore();
};

welcome();
