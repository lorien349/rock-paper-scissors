// Game's variables
let playerChoice = null;
let computerChoice = undefined;
let winner = undefined;

// Colors
const LIME_COLOR = "#3DFE84";
const DEFAULT_GRAY_COLOR = "#c5c5c5";
const DEFAULT_BORDER_GRAY_COLOR = "#929292";
const GREEN_COLOR = "#28a745";
const RED_COLOR = "#dc3545";
const YELLOW_COLOR = "#ffc107";

// DOM nodes
const allOptionsContainer = document.querySelector("#all-options-container");
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const playButton = document.querySelector("#play-button");
const wonLostText = document.querySelector("#won-lost-text");



// Functions
assignPlayerChoice = function(button) {
    const id = button.getAttribute("id");

    switch(id) {
        case "rock-button":
            playerChoice = "rock";
            break;
        case "paper-button":
            playerChoice = "paper";
            break;
        case "scissors-button":
            playerChoice = "scissors";
            break;
    }

    switch(playerChoice) {
        case "rock":
            rockButton.style.backgroundColor = LIME_COLOR;
            rockButton.style.border = `3px, solid, ${LIME_COLOR}`;
            rockButton.textContent = "SELECTED";

            paperButton.style.backgroundColor = DEFAULT_GRAY_COLOR;
            paperButton.style.border = `3px, solid, ${DEFAULT_BORDER_GRAY_COLOR}`;
            paperButton.textContent = "SELECT";

            scissorsButton.style.backgroundColor = DEFAULT_GRAY_COLOR;
            scissorsButton.style.border = `3px, solid, ${DEFAULT_BORDER_GRAY_COLOR}`;
            scissorsButton.textContent = "SELECT";

            break;

        case "paper":
            paperButton.style.backgroundColor = LIME_COLOR;
            paperButton.style.border = `3px, solid, ${LIME_COLOR}`;
            paperButton.textContent = "SELECTED";

            rockButton.style.backgroundColor = DEFAULT_GRAY_COLOR;
            rockButton.style.border = `3px, solid, ${DEFAULT_BORDER_GRAY_COLOR}`;
            rockButton.textContent = "SELECT";

            scissorsButton.style.backgroundColor = DEFAULT_GRAY_COLOR;
            scissorsButton.style.border = `3px, solid, ${DEFAULT_BORDER_GRAY_COLOR}`;
            scissorsButton.textContent = "SELECT";

            break;
        
        case "scissors":
            scissorsButton.style.backgroundColor = LIME_COLOR;
            scissorsButton.style.border = `3px, solid, ${LIME_COLOR}`;
            scissorsButton.textContent = "SELECTED";

            paperButton.style.backgroundColor = DEFAULT_GRAY_COLOR;
            paperButton.style.border = `3px, solid, ${DEFAULT_BORDER_GRAY_COLOR}`;
            paperButton.textContent = "SELECT";

            rockButton.style.backgroundColor = DEFAULT_GRAY_COLOR;
            rockButton.style.border = `3px, solid, ${DEFAULT_BORDER_GRAY_COLOR}`;
            rockButton.textContent = "SELECT";

            break;
    }
};

assignComputerChoice = function() {
    let randomNum = Math.random();

    if (randomNum >= 0 && randomNum <= 0.3) {
        computerChoice = "rock";
    } else if (randomNum > 0.3 && randomNum <= 0.6) {
        computerChoice = "paper";
    } else if (randomNum > 0.6 && randomNum <= 1) {
        computerChoice = "scissors";
    }
};

playRound = function() {
    if (playerChoice == null) {
        winner = null
    } else if (computerChoice == playerChoice) {
        winner = undefined;
    } else {
        if (computerChoice == "rock") {
            if (playerChoice == "paper") {
                winner = "player";
            } else if (playerChoice == "scissors") {
                winner = "computer";
            }
        } else if (computerChoice == "paper") {
            if (playerChoice == "rock") {
                winner = "computer";
            } else if (playerChoice == "scissors") {
                winner = "player";
            }
        } else if (computerChoice == "scissors") {
            if (playerChoice == "rock") {
                winner = "player";
            } else if (playerChoice = "paper") {
                winner = "computer";
            }
        }
    }

    switch(winner) {
        case null:
            wonLostText.style.color = YELLOW_COLOR;
            wonLostText.textContent = "Select an option";
            break;
        case undefined:
            wonLostText.style.color = YELLOW_COLOR;
            wonLostText.textContent = "Draw";
            break;
        case "player":
            wonLostText.style.color = GREEN_COLOR;
            wonLostText.textContent = "You won!"
            break;
        case "computer":
            wonLostText.style.color = RED_COLOR;
            wonLostText.textContent = "You lost!"
            break;
    }
};



// Event listeners
allOptionsContainer.addEventListener("click", function(event) {
    const button = event.target;
    assignPlayerChoice(button);
});

playButton.addEventListener("click", function() {
    assignComputerChoice();
    playRound();
});