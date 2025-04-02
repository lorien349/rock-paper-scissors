let playerScore = 0;
let computerScore = 0;


function getComputerChoice () {
    let randomNum = Math.random()
    let computerChoice = undefined

    if (randomNum >= 0 && randomNum <= 0.3) {
        computerChoice = "rock"
    } else if (randomNum > 0.3 && randomNum <= 0.6) {
        computerChoice = "paper"
    } else if (randomNum > 0.6 && randomNum <= 1) {
        computerChoice = "scissors"
    }

    return computerChoice
}

function getPlayerChoice () {
    let option = prompt("Insert rock, paper, or scissors").toLowerCase()
    return option
}

function playGame () {
    function playRound (computerChoice = getComputerChoice(), playerChoice = getPlayerChoice()) {
        let winner = undefined
        let draw = false
    
        if (computerChoice == playerChoice) {
            draw = true
        } else {
            if (computerChoice == "rock") {
                if (playerChoice == "paper") {
                    winner = "player"
                } else if (playerChoice == "scissors") {
                    winner = "computer"
                }
            } else if (computerChoice == "paper") {
                if (playerChoice == "rock") {
                    winner = "computer"
                } else if (playerChoice == "scissors") {
                    winner = "player"
                }
            } else if (computerChoice == "scissors") {
                if (playerChoice == "rock") {
                    winner = "player"
                } else if (playerChoice = "paper") {
                    winner = "computer"
                }
            }
        }
    
        if (draw == true) {
            return "Draw"
        } else {
            if (winner == "computer") {
                ++computerScore
                return "You lost"
            } else if (winner == "player") {
                ++playerScore
                return "You win!!"
            }
        }
    }

    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
}



playGame()