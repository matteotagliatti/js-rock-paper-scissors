let computerWon = 0;
let playerWon = 0;

// GAME LOGIC

function playRound(playerSelection, computerSelection) {
    computerSelection = getRandomChoice()

    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    }
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        playerWon++
        roundWinner = 'player'
    }
    if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
    ) {
        computerWon++
        roundWinner = 'computer'
    }
}

function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

// UI

rockBtn.addEventListener('click', () => playerChoice('rock'))
paperBtn.addEventListener('click', () => playerChoice('paper'))
scissorsBtn.addEventListener('click', () => playerChoice('scissors'))

const resultInfo = document.getElementById('resultInfo')
const playerScore = document.getElementById('playerScore')
const computerScore = document.getElementById('computerScore')
const finalResult = document.getElementById('finalResult')

function playerChoice(playerSelection) {
    const computerSelection = getRandomChoice()
    playRound(playerSelection, computerSelection)
    updateScore()
    countRounds()
}

function updateScore() {
    if (roundWinner === 'tie') {
        resultInfo.textContent = "It's a tie!"
    } else if (roundWinner === 'player') {
        resultInfo.textContent = "You won!"
    } else if (roundWinner === 'computer') {
        resultInfo.textContent = "You lost!"
    }

    playerScore.textContent = `Player: ${playerWon}`
    computerScore.textContent = `Computer: ${computerWon}`
}

function countRounds() {
    if (playerWon === 5 || computerWon === 5) {
        if (playerWon > computerWon) {
            finalResult.textContent = "You won 😀"
        } else {
            finalResult.textContent = "You lost 🙁"
        }

        restartGame()
    }
}

function restartGame() {
    playerWon = 0
    computerWon = 0
}