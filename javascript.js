// win <- 0, lose <- 0 rounds <- 0
let win = 0, lose = 0, rounds = 0;

playGame();


// // COMPUTE variable for computerSelection with function getComputerChoice 
function getComputerChoice() {
  let hand = Math.floor(Math.random() * 3) +1;
  if (hand === 1) {
    return "rock";
  } else if (hand === 2) {
        return "scissors";
  } else {
        return "paper"; }
};

// COMPARE playerSelection to computerSelection and output results for 1 round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    win = ++win, rounds = ++rounds;
    return ("Rock beats scissors You win!")
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    lose = ++lose, rounds = ++rounds;
    return "Paper beats rock. You lose!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    lose = ++lose, rounds = ++rounds;
    return "Rock beats scissors You Lose!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    win = ++win, rounds = ++rounds;
    return "Scissors beat paper. You win!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    win = ++win, rounds = ++rounds;
    return "Paper beats rock. You win!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    lose = ++lose, rounds = ++rounds;
    return "Scissors beat paper. You lose!";
  } else {
    rounds = ++rounds;
    return "Tie. Please try again."
  };
};

// Create function playGame for 5 rounds game
function playGame() {
  while (rounds < 5) {
    let computerSelection = getComputerChoice();
    console.log("computer chooses " + computerSelection + "!");

    // GET valid player selection
    let playerSelection = prompt("Rock, scissors, or paper?").toLowerCase();
    while (playerSelection !== "rock" && playerSelection !== "scissors" && playerSelection !== "paper") {
    playerSelection = prompt("Invalid entry. Please try rock, scissors, or paper?").toLowerCase();
    };
    console.log("Player chooses " + playerSelection + "!");

    // CALL function playRound 
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
};

  if (win > lose) {
    console.log("Congratulations, you win!");
  } else if (win < lose) {
    console.log("You lost. Better luck next time!");
  } else {
    console.log("Tie game! wha-waaa...");
  };
  }


