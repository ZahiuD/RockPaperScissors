let userScore = 0;
let compScore = 0;
const userScore_span = document.querySelector('#user-score'); 
const compScore_span = document.querySelector('#comp-score'); 
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.querySelector('#r');
const paper_div = document.querySelector('#p');
const scissors_div = document.querySelector('#s');

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = parseInt(Math.random() * 3);
	return choices[randomNumber];
}

function convertToWord(char) {
	switch (char) {
		case 'r':
			return 'Rock';
		
		case 'p':
			return "Paper";

		case 's':
			return "Scissors";
	}
}

function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	result_p.innerHTML = `${convertToWord(userChoice)}(user) beats ${convertToWord(computerChoice)}(comp). You win!`;
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(function() {
		document.getElementById(userChoice).classList.remove('green-glow');
	}, 350);
}

function lose(userChoice, computerChoice) {
	compScore++;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${convertToWord(userChoice)}(user) loses to ${convertToWord(computerChoice)}(comp). You lose!`;
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(function() {
		document.getElementById(userChoice).classList.remove('red-glow');
	}, 350);
}

function draw(userChoice) {
	result_p.innerHTML = "It's a draw!";
	document.getElementById(userChoice).classList.add('gray-glow');
	setTimeout(function() {
		document.getElementById(userChoice).classList.remove('gray-glow');
	}, 350);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case 'rs':
		case 'sp':
		case 'pr':
			win(userChoice, computerChoice);
			break;

		case 'rp':
		case 'ps':
		case 'sr':
			lose(userChoice, computerChoice);
			break;
		
		default:
			draw(userChoice);
			break;
	}
}


function main() {
	rock_div.addEventListener('click', function() {
		game('r');
	});

	paper_div.addEventListener('click', function() {
		game('p');
	});

	scissors_div.addEventListener('click', function() {
		game('s');
	});
}

main();