function getComputerChoice() {
    const options = ["ROCK","PAPER","SCISSORS"]
    const choice = options[Math.floor(Math.random()*options.length)]
    return choice;
}

console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toUpperCase() === computerSelection) {
        return "Tie";
    } else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "PAPER") {
        return "You lose! Paper beats Rock!";
    } else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "SCISSORS") {
        return "You win! Rock beats Scissors!";
    } else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "SCISSORS") {
        return "You lose! Scissors beats Paper!";
    } else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "ROCK") {
        return "You win! Paper beats Rock!";
    } else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "ROCK") {
        return "You lose! Rock beats Scissors!";
    } else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "PAPER") {
        return "You win! Scissors beats Paper!";
    } else {
        return "nothing"
    }










    
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));