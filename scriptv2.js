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
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            displayControl(button.id);
        });
    });
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

function displayControl(playerChoice) {
    const computerChoice = getComputerChoice();
    
    const currentResult = document.querySelector('.currentResult');
    currentResult.textContent = playRound(computerChoice, playerChoice);

    const runningScore = document.querySelector('.runningScore');
    runningScore.textContent = `You: ${playerScore} Tandy: ${computerScore}`;

    //If you don't wrap the click function in an anonymous functions it will trigger before click//
    const reset = document.querySelector('.reset');
    reset.addEventListener('click', () => {
        gameReset(final, runningScore, currentResult)
    });

    if (playerScore >= 5 || computerScore >= 5) {

        if (playerScore == computerScore) {
        finalScore = "It's a Draw";
        } else if (playerScore > computerScore) {
        finalScore = "Winner Winner Chicken Dinner!";
        } else {
        finalScore = "Take The L";
        }

    }

    const final = document.querySelector('.final');
    final.textContent = `${finalScore}`;
}

function gameReset(final, runningScore, currentResult) {
    playerScore = 0;
    computerScore = 0;
    finalScore = "";
    currentResult.textContent = "";
    runningScore.textContent = "";
    final.textContent = "";
}


let playerScore = 0;
let computerScore = 0;
let finalScore;

getPlayerChoice();