const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultDiv = document.querySelector('.game-result');
const winCount = document.querySelector('#win-count');
const loseCount = document.querySelector('#lose-count');
const tieCount = document.querySelector('#tie-count');

let wins = 0;
let losses = 0;
let ties = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function play(playerChoice) {
  const computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
    resultDiv.textContent = "It's a tie!";
    ties++;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    resultDiv.textContent = 'You win!';
    wins++;
  } else {
    resultDiv.textContent = 'You lose!';
    losses++;
  }
  
  winCount.textContent = `Wins: ${wins}`;
  loseCount.textContent = `Losses: ${losses}`;
  tieCount.textContent = `Ties: ${ties}`;
}

rockBtn.addEventListener('click', () => {
  play('rock');
});

paperBtn.addEventListener('click', () => {
  play('paper');
});

scissorsBtn.addEventListener('click', () => {
  play('scissors');
});


