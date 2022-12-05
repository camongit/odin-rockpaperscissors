// This second version of the Rock Paper Scissors game is a complete rewrite of the original.
// The rewrite was done to more closely reflect the requirements of theodinproject.com

function getComputerChoice() {
    let selection = Math.floor(Math.random() * 3);
    if (selection === 0) {
        return "rock";
    } else if (selection === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerChoice() {
    let userInput = prompt("Select Rock, Paper, or Scissors");
    return userInput.toLowerCase();
}

function playRound(computerChoice, playerChoice) {
    if (playerChoice === computerChoice) {
        return "Draw!";
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore += 1;
            return "You Lose!  Paper Beats Rock!";
        } else if (computerChoice === "scissors") {
            playerScore += 1; 
            return "You Win! Rock Beats Paper!";
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore += 1;
            return "You Lose!  Scissors Beats Paper!";
        } else if (computerChoice === "rock") { 
            playerScore += 1; 
            return "You Win! Paper Beats Rock!";
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore += 1;
            return "You Lose!  Rock beats Scissors!"
        } else if (computerChoice === "paper") { 
            playerScore += 1; 
            return "You Win! Scissors Beats Paper!";
        }  
    }
}

function game() {
    for (i = 0; i < 5; ++i) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(computerChoice, playerChoice));
    }
    if (playerScore == computerScore) {
        finalScore = "Draw";
    } else if (playerScore > computerScore) {
        finalScore = "Win";
    } else {
        finalScore = "Lose";
    }
console.log(`You ${finalScore} You ${playerScore} Tandy ${computerScore} Thanks for Playing!`);
}

let playerScore = 0;
let computerScore = 0;
let finalScore;
game();



