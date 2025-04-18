// Game's variables
let playerChoice = undefined;
let computerChoice = undefined;
let winner = undefined;
let isFirstRound = true;

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

    console.log(playerChoice);
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

    console.log(computerChoice);
};

playRound = function(playerChoice, computerChoice = assignComputerChoice()) {
    
};



// Event listeners
allOptionsContainer.addEventListener("click", function(event) {
    const button = event.target;
    assignPlayerChoice(button);
});

playButton.addEventListener("click", () => console.log("Hello World"));