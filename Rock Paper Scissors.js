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

function playRound (playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() == 'rock' &&
        computerSelection == 'scissors') ||
        (playerSelection.toLowerCase() == 'scissors' &&
        computerSelection == 'paper') ||
        (playerSelection.toLowerCase() == 'paper' &&
        computerSelection == 'rock')) {
            return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
        }
    else if ((playerSelection.toLowerCase() == 'paper' &&
        computerSelection == 'scissors') ||
        (playerSelection.toLowerCase() == 'rock' &&
        computerSelection == 'paper') ||
        (playerSelection.toLowerCase() == 'scissors' &&
        computerSelection == 'rock')) {
            return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
            }
    else if (playerSelection.toLowerCase() == computerSelection) {
        return "It's a Tie! Rematch! Rematch! Rematch!"
    }
    else {
        return "Something's wrong..."
    }
}

const playerSelection = "Scissors";
const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
