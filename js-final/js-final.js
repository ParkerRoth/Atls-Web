const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultDiv = document.querySelector('.game-result');

function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	const randomIndex = Math.floor(Math.random() * 3);
	return choices[randomIndex];
}

function play(playerChoice) {
	const computerChoice = getComputerChoice();

	if (playerChoice === computerChoice) {
		resultDiv.textContent = "It's a tie!";
	} else if (
		(playerChoice === 'rock' && computerChoice === 'scissors') ||
		(playerChoice === 'paper' && computerChoice === 'rock') ||
		(playerChoice === 'scissors' && computerChoice === 'paper')
	) {
		resultDiv.textContent = 'You win!';
	} else {
		resultDiv.textContent = 'You lose!';
	}
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


