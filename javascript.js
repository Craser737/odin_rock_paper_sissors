const body = document.querySelector('body');
const rockBtn = document.querySelector('#rock');
const scissorsBtn = document.querySelector('#scissors');
const paperBtn = document.querySelector('#paper');
const results = document.querySelector('#round');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const final = document.querySelector('#final');
 

body.addEventListener('click', (e) => {
  const target = e.target
  let playerSelection = '';
  console.log(playerSelection);
  switch (target) {
    case rockBtn:
      playerSelection = 'rock';
      break;
    case scissorsBtn:
      playerSelection = 'scissors';
      break;
    case paperBtn:
      playerSelection = 'paper';
      break;
    }
  playRound(playerSelection);
});

let win = 0, lose = 0, rounds = 0;


// // COMPUTE variable for computerSelection with function getComputerChoice 
function getComputerChoice() {
  let hand = Math.floor(Math.random() * 3) +1;
  if (hand === 1) {
    return "rock";
  } else if (hand === 2) {
        return "scissors";
  } else {
        return "paper";
  }
}

function playRound(playerSelection) {
  if (rounds === 0) {
    final.textContent = "";  
    results.textContent = '';
  }
  let computerSelection = getComputerChoice(); 
  const li = document.createElement('li');
  
  player.textContent = ('player chooses ' + playerSelection + '!');
  computer.textContent = ("computer chooses " + computerSelection + '!');  
    
  if (playerSelection === "rock" && computerSelection === "scissors") {
    li.textContent = "Rock beats scissors You win!";
    results.appendChild(li);
    win++;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    li.textContent = "Paper beats rock. You lose!";
    results.appendChild(li);
    lose++; 
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    li.textContent = "Rock beats scissors You Lose!";
    results.appendChild(li);
    lose++; 
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    li.textContent = "Scissors beat paper. You win!";
    results.appendChild(li);
    win++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    li.textContent = "Paper beats rock. You win";
    results.appendChild(li);
    win++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    li.textContent = "Scissors beat paper. You lose!";
    results.appendChild(li);
    lose++; 
  } else {
    li.textContent = "Tie. Please try again.";
    results.appendChild(li);
  };
  rounds++;

  if (rounds === 5) {
    if (win > lose) {
      final.textContent = "Congratulations, you win!";
    } else if (win < lose) {
      final.textContent = "You lost. Better luck next time!";
    } else {
      final.textContent = "Tie game! wha-waaa...";
    }
    rounds = 0;
  }
}
