function getComputerChoice() {
    let options = ["ROCK","PAPER","SCISSORS"]
    let choice = options[Math.floor(Math.random()*options.length)]
    return choice;
}

let playerScore = 0;
let computerScore = 0;

let playerSelection = prompt("Scissors, Paper, Rock?");
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toUpperCase() === computerSelection) {
        let result = "A tie! Let's play again!"
        result += "\n"
        result += "Your Score: " + playerScore
        result += "\n"
        result += "Computer Score: " + computerScore
        return result;
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "PAPER") {
        computerScore++;
        let result = "You lose! Paper beats Rock!"
        result += "\n"
        result += "Your Score: " + playerScore
        result += "\n"
        result += "Computer Score: " + computerScore
        return result;
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "SCISSORS") {
        playerScore++;
        let result = "You win! Rock beats Scissors!"
        result += "\n"
        result += "Your Score: " + playerScore
        result += "\n"
        result += "Computer Score: " + computerScore
        return result;
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "SCISSORS") {
        computerScore++;
        let result = "You lose! Scissors beats Paper!"
        result += "\n"
        result += "Your Score: " + playerScore
        result += "\n"
        result += "Computer Score: " + computerScore
        return result;
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "ROCK") {
        playerScore++;
        let result = "You win! Paper beats Rock!"
        result += "\n"
        result += "Your Score: " + playerScore
        result += "\n"
        result += "Computer Score: " + computerScore
        return result;
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "ROCK") {
        computerScore++;
        let result = "You lose! Rock beats Scissors!"
        result += "\n"
        result += "Your Score: " + playerScore
        result += "\n"
        result += "Computer Score: " + computerScore
        return result;
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "PAPER") {
        playerScore++;
        let result = "You win! Scissors beats Paper!"
        result += "\n"
        result += "Your Score: " + playerScore
        result += "\n"
        result += "Computer Score: " + computerScore
        return result;
    } else {
        let result = "Please enter scissors, paper, or rock."
        result += "\n"
        result += "Your Score: " + playerScore
        result += "\n"
        result += "Computer Score: " + computerScore
        return result;
    }

}



console.log(computerSelection)

function game () {
    console.log(playRound(playerSelection, computerSelection))
}

game();