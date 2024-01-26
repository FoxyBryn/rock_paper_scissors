const buttons = document.querySelectorAll('button');
const resultText = document.querySelector('.results');
const endgameText = document.querySelector('.endgame');


function getComputerChoice() {
    let options = ["rock","paper","scissors"]
    let choice = options[Math.floor(Math.random()*options.length)]
    return choice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        let result = "A tie! Let's try again!"
        result += " Your Score: " + playerScore
        result += " Computer Score: " + computerScore
        return result;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        let result = "You lose! Paper beats Rock!"
        result += " Your Score: " + playerScore
        result += " Computer Score: " + computerScore
        return result;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        let result = "You win! Rock beats Scissors!"
        result += " Your Score: " + playerScore
        result += " Computer Score: " + computerScore
        return result;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        let result = "You lose! Scissors beats Paper!"
        result += " Your Score: " + playerScore
        result += " Computer Score: " + computerScore
        return result;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        let result = "You win! Paper beats Rock!"
        result += " Your Score: " + playerScore
        result += " Computer Score: " + computerScore
        return result;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        let result = "You lose! Rock beats Scissors!"
        result += " Your Score: " + playerScore
        result += " Computer Score: " + computerScore
        return result;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        let result = "You win! Scissors beats Paper!"
        result += " Your Score: " + playerScore
        result += " Computer Score: " + computerScore
        return result;
    } else {
        let result = "Please enter scissors, paper, or rock."
        result += " Your Score: " + playerScore
        result += " Computer Score: " + computerScore
        return result;
    }
    
}

function endgame() {
    if (computerScore === 5) {
        endgameText.textContent = "Sorry you lose! Refresh the browser to play again.";
    } else if (playerScore === 5){
        endgameText.textContent = "Yay! You win! Refresh the browser to play again.";
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.className;
        let computerSelection = getComputerChoice();
        resultText.textContent = (playRound(playerSelection, computerSelection));
        endgame();
    })
});