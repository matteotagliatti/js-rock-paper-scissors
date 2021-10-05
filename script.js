function playerSelection() {
    userInput = prompt('Enter your choice');
    userInput = userInput.toLowerCase();
    // validation
    if (userInput == 'rock' || 'paper' || 'scissors') {
        alert('Valid selection.');
    } else {
        alert('invalid selection');
    }
    return userInput;
}

function computerSelection() {
    computerInput = ['rock', 'paper', 'scissors'];
    computerInput = computerInput[Math.floor(Math.random() * computerInput.length)];
    return computerInput;
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    // player: rock
    if (playerSelection === 'rock') {
        if (computerSelection == 'rock') {
            console.log('It\'s a draw!');
            return;
        } else if (computerSelection == 'scissors') {
            console.log('You win! Rock crushes scissors!');
            playerWon++;
            return;
        } else if (computerSelection == 'paper') {
            console.log('You lose! Paper covers rock!');
            computerWon++;
            return;
        }
    }
    // player: paper
    if (playerSelection === 'paper') {
        if (computerSelection == 'rock') {
            console.log('You win! Paper covers rock!');
            playerWon++;
            return;
        } else if (computerSelection == 'scissors') {
            console.log('You lose! Scissors cut paper!');
            computerWon++;
            return;
        } else if (computerSelection == 'paper') {
            console.log('It\'s a draw!');
            return;
        }
    }
    // player: scissors
    if (playerSelection === 'scissors') {
        if (computerSelection == 'rock') {
            console.log('You lose! Rock crushes scissors!');
            computerWon++;
            return;
        } else if (computerSelection == 'scissors') {
            console.log('It\'s a draw!');
            return;
        } else if (computerSelection == 'paper') {
            console.log('You win! Scissors cut paper!');
            playerWon++;
            return;
        }
    }

}

let rounds = 0;
let playerWon = 0;
let computerWon = 0;

function game() {
    if (rounds < 5) {
        rounds++;
        console.log("Round: " + rounds);
        playRound(playerSelection(), computerSelection());
        score(playerWon, computerWon);
        game()
    } else {
        if (playerWon > computerWon) {
            console.log(`You win!`);
        } else {
            console.log(`You lose!`);
        }
    }
}

game()

function score(playerWon, computerWon) {
    console.log(`Player score: ${playerWon} - Computer score: ${computerWon}`)
}