
function getComputerChoice() {
    num = Math.floor(Math.random()*100);
    if (num < 33) {
        return 'rock';
    }
    else if (num > 66) {
        return 'scissors';
    }
    else {
        return 'paper';
    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() == 'rock' &&
        computerSelection == 'scissors') ||
        (playerSelection.toLowerCase() == 'scissors' &&
        computerSelection == 'paper') ||
        (playerSelection.toLowerCase() == 'paper' &&
        computerSelection == 'rock')) {
            return result = 'Player Won'
        }
    else if ((playerSelection.toLowerCase() == 'paper' &&
        computerSelection == 'scissors') ||
        (playerSelection.toLowerCase() == 'rock' &&
        computerSelection == 'paper') ||
        (playerSelection.toLowerCase() == 'scissors' &&
        computerSelection == 'rock')) {
            return result = 'Player Lost'
            }
    else if (playerSelection.toLowerCase() == computerSelection) {
        return result = 'Draw'
    }
    else {
        return result = "Mistype?"
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = prompt("Let's play Rock Paper Scissors!");
    let computerSelection = getComputerChoice();
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection, playerScore, computerScore);
        if (result == 'Player Won') {
            playerScore++;
            console.log('You win this round. ' + playerSelection + ' beats ' + computerSelection + '.\nPlayer: ' + playerScore + '  Computer: ' + computerScore);
        } else if (result == 'Player Lost') {
            computerScore++;
            console.log('You lose this round. ' + computerSelection + ' beats ' + playerSelection + '.\nPlayer: ' + playerScore + '  Computer: ' + computerScore);
        } else if (result == 'Draw') {
            console.log("This round is a draw." + '\nPlayer: ' + playerScore + '  Computer: ' + computerScore);
        } else {
            console.log("Something's wrong...")
        }
        playerSelection = prompt("Rock, paper, scissors, go!")
        computerSelection = getComputerChoice();
    }
    if (playerScore > computerScore) {
        console.log('Congratulations! You WON!');
    }
    else if (computerScore > playerScore) {
        console.log('You lost. Lucky computer...');
    }
    else if (computerScore == playerScore) {
        console.log("It's a Tie! Rematch! Rematch! Rematch!");
    }
}

game();