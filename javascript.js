// SET Variable for computerSelection and CALL function getComputerChoice
let computerSelection = getComputerChoice();
console.log("computer chooses " + computerSelection + "!");

// GET input for player selection, SET to lower case, ASSIGN to variable playerSelection
let playerSelection = prompt("Rock, scissors, or paper?").toLowerCase();

// DETERMINE input is valid or prompt for re-entry
while (playerSelection !== "rock" && playerSelection !== "scissors" && playerSelection !== "paper") {
   playerSelection = prompt("Invalid entry. Please try rock, scissors, or paper?").toLowerCase();
};
console.log("Player chooses " + playerSelection + "!");

// win <- 0, lose <- 0 rounds <- 0
let win = 0, lose = 0, rounds = 0;

// Create function for 5 round game

// CALL function playRound and SET as variable roundResult
let roundResult = playRound(playerSelection, computerSelection);
console.log(roundResult);
// // COMPUTE variable for computerSelection with function getComputerChoice 
function getComputerChoice() {
//   COMPUTE random number between 1 and 3
  let hand = Math.floor(Math.random() * 3) +1;

  //   IF 1 THEN "rock", ELSE IF 2 THEN "scissors" ELSE "paper"
  if (hand === 1) {
    return "rock";
  } else if (hand === 2) {
        return "scissors";
  } else {
        return "paper"; }
};

// COMPARE playerSelection to computerSelection
function playRound(playerSelection, computerSelection) {
//   DISPLAY a win/lose message for each combination
if (playerSelection === "rock" && computerSelection === "scissors") {
  console.log("Rock beats scissors You win!")
} else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Paper beats rock. You lose!";
} else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Rock beats scissors You Lose!";
} else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "Scissors beat paper. You win!";
} else if (playerSelection === "paper" && computerSelection === "rock") {
    return "Paper beats rock. You win!";
} else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Scissors beat paper. You lose!";
} else {
    return "Tie. Please try again"};
};


// playRound function INCREMENTS win or lose, and rounds
// FOR rounds = 5, COMPARE win to lose and DISPLAY Win/lose message

