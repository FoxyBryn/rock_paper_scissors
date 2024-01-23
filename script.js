function getComputerChoice() {
    let options = ["ROCK","PAPER","SCISSORS"]
    let choice = options[Math.floor(Math.random()*options.length)]
    return choice;
}

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

function playRound() {

    let playerSelection = prompt("Scissors, Paper, Rock?").toUpperCase();
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        let result = "A tie! Let's try again!"
        result += "\n"
        result += "Your Score: " + playerScore
        result += "\n"
        result += "Computer Score: " + computerScore
        return result;
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        roundCount++;
        computerScore++;
        let result = "You lose! Paper beats Rock!"
        result += "\n"
        result += "Your Score: " + playerScore
        result += "\n"
        result += "Computer Score: " + computerScore
        return result;
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        roundCount++;
        playerScore++;
        let result = "You win! Rock beats Scissors!"
        result += "\n"
        result += "Your Score: " + playerScore
        result += "\n"
        result += "Computer Score: " + computerScore
        return result;
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        roundCount++;
        computerScore++;
        let result = "You lose! Scissors beats Paper!"
        result += "\n"
        result += "Your Score: " + playerScore
        result += "\n"
        result += "Computer Score: " + computerScore
        return result;
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        roundCount++;
        playerScore++;
        let result = "You win! Paper beats Rock!"
        result += "\n"
        result += "Your Score: " + playerScore
        result += "\n"
        result += "Computer Score: " + computerScore
        return result;
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        roundCount++;
        computerScore++;
        let result = "You lose! Rock beats Scissors!"
        result += "\n"
        result += "Your Score: " + playerScore
        result += "\n"
        result += "Computer Score: " + computerScore
        return result;
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        roundCount++;
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

function game() {
    console.log(playRound());
    if (roundCount < 5) {
        game ();
    } else if (computerScore > playerScore) {
        console.log("Sorry you lose!");
    } else if (computerScore < playerScore){
        console.log("Yay! You win!");
    } else {
        console.log("Oh a tie... Let's play again.")
    }
}

console.log("Hi! Let's play Scissors, Paper, Rock. Best of five wins!")
game();