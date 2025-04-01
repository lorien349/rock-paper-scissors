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

console.log(getComputerChoice());