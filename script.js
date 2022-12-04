// Rock Paper Scissors //
let userScore = 0;
let cpuScore = 0;
startGame();

//Count Rounds and Keep Score
function startGame() {
    userScore = 0;
    cpuScore = 0;
    for (i = 1; i < 6; ++i) {
        console.log(`Round ${i}`);
        let cpu = getComputerSelection();
        let user = getUserInput();
        console.log(user, cpu);
        compareInputs(user, cpu);
        console.log("You: " + userScore + " " + "Computer: " + cpuScore);
    }
    console.log("Game Complete!");
}

//Generate Computer Selection
function getComputerSelection() {
    let selection = Math.floor(Math.random() * 3);

    if (selection === 0) {
        return "rock";
    } else if (selection === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

//Get User Input
function getUserInput() {
    let userInput = prompt("Select Rock, Paper, or Scissors");
    return userInput.toLowerCase();
}

//Compare User and Computer Selection
function compareInputs(user, cpu) {
    if (user === cpu) {
        keepScore("draw");
    } else if (user === "rock") {
        if (cpu === "paper") {
            keepScore("lose");
        } else {
            keepScore("win");
        }
    } else if (user === "paper") {
        if (cpu === "scissors") {
            keepScore("lose");
        } else {
            keepScore("win");
        }
    } else if (user === "scissors") {
        if (cpu === "rock") {
            keepScore("lose");
        } else {
            keepScore("win");
        }
    } else {
        console.log("Input Error");
        startGame();
    }
}

//Keep Score and Output
function keepScore(winLoseDraw) {
    if (winLoseDraw == "win") {
        userScore += 1;
        console.log("You Win!");
    } else if (winLoseDraw === "lose") {
        cpuScore += 1;
        console.log("You Lose");
    } else {
        console.log("Draw");
    }
}

