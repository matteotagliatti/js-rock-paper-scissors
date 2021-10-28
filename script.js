let computerWon = 0;
let playerWon = 0;

// GAME LOGIC

function playRound(playerSelection, computerSelection) {
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
restart.addEventListener('click', restartGame)

const resultInfo = document.getElementById('resultInfo')
const playerScore = document.getElementById('playerScore')
const computerScore = document.getElementById('computerScore')
const finalResult = document.getElementById('finalResult')
const overlay = document.getElementById('overlay')
const modal = document.getElementById('modal')

function playerChoice(playerSelection) {
    const computerSelection = getRandomChoice()
    playRound(playerSelection, computerSelection)
    updateChoices(playerSelection, computerSelection)
    updateScore()
    countRounds()
}

function updateScore() {
    if (roundWinner === 'tie') {
        resultInfo.innerHTML = "Round winner: <strong>Tie!</strong>"
    } else if (roundWinner === 'player') {
        resultInfo.innerHTML = "Round winner: <strong>You!</strong>"
    } else if (roundWinner === 'computer') {
        resultInfo.innerHTML = "Round winner: <strong>Computer!</strong>"
    }

    updatePoints()
}

function updatePoints() {
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

        showEndModal()
    }
}

function showEndModal() {
    overlay.classList.remove('hid')
    modal.classList.remove('hid')
}

function updateChoices(playerSelection, computerSelection) {
    const playerChoice = document.getElementById('playerChoice')
    const computerChoice = document.getElementById('computerChoice')

    playerChoice.innerHTML = `<img src="img/${playerSelection}.png">`
    computerChoice.innerHTML = `<img src="img/${computerSelection}.png">`
}

function restartGame() {
    playerWon = 0
    computerWon = 0
    updatePoints()
    updateChoices('placeholder', 'placeholder')
    resultInfo.innerHTML = "Round winner:"
    overlay.classList.add('hid')
    modal.classList.add('hid')
}