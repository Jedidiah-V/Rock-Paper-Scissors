/* Initialize results text
press choice
play round
count score
when either score equals 5, give results
remove event listeners
add reset button
if reset is pressed, reset scores and results, add event listeners, play game */

let round;
let score = [0, 0]; // Will keep player score and computer score
let selection = {}; // Will keep player choice and computer choice
const announcement = document.querySelector('.announcement');
announcement.textContent = 'Rock, Paper, Scissors, Go!';
const playerscore = document.querySelector('.playerscore');
const computerscore = document.querySelector('.computerscore');

function getSelection(playerChoice) {
    const player = playerChoice;
    const computer = getComputerChoice();
    return {player, computer};
}
function getComputerChoice() {
    num = Math.floor(Math.random()*100);
    if (num < 33) {
        return selection.computer = 'Rock';
    } else if (num > 66) {
        return selection.computer = 'Scissors';
    } else {
        return selection.computer = 'Paper';
    }
}
function playRound(selection) {
    if ((selection.player == 'Rock' &&
        selection.computer == 'Scissors') ||
        (selection.player == 'Scissors' &&
        selection.computer == 'Paper') ||
        (selection.player == 'Paper' &&
        selection.computer == 'Rock')) {
            return round = 'player won';
    } else if ((selection.player == 'Paper' &&
        selection.computer == 'Scissors') ||
        (selection.player == 'Rock' &&
        selection.computer == 'Paper') ||
        (selection.player == 'Scissors' &&
        selection.computer == 'Rock')) {
            return round = 'player lost';
    } else if (selection.player == selection.computer) {
        return round = 'draw';
    } else {
        announcement.textContent = "Something's wrong with this round...";
    //    announcement.textContent = "";     See if an error would have overlapping text
    //    scoreboard.textContent = "";
    }
}
function countScore(round, score, selection) {
    if (round == 'player won') {
        score[0] += 1;
        announcement.textContent = 'You win this round. ' + selection.player + ' beats ' + selection.computer + '.';
        playerscore.textContent = 'You: ' + score[0];
        computerscore.textContent = 'Boss: ' + score[1];
    } else if (round == 'player lost') {
        score[1] += 1;
        announcement.textContent = 'You lose this round. ' + selection.computer + ' beats ' + selection.player + '.';
        playerscore.textContent = 'You: ' + score[0];
        computerscore.textContent = 'Boss: ' + score[1];
    } else if (round == 'draw') {
        announcement.textContent = "This round is a draw.";
        playerscore.textContent = 'You: ' + score[0];
        computerscore.textContent = 'Boss: ' + score[1];
    } else {
        announcement.textContent = "Something's wrong with the score...";
        playerscore.textContent = 'You: ' + score[0];
        computerscore.textContent = 'Boss: ' + score[1];
    } 
    return score;
}
function endGame(score) {
    if (score[0] == 5 || score[1] == 5) {
        if (score[0] == 5) {
            announcement.textContent = 'Congratulations on your raise! Try for another?';
            greatReset();
        } else if (score[1] == 5) {
            announcement.textContent = 'Your wages are hit. Will you risk a rematch?';
            greatReset();
        }
        document.removeEventListener("click", choiceListener);
    }
}
function greatReset() {
    let reset = document.createElement('BUTTON');
    reset.classList.add('reset');
    reset.textContent = "You're on!";
    document.body.appendChild(reset);
    reset.addEventListener('click', () => {
        announcement.textContent = 'Rock, paper, scissors, go!';
        playerscore.textContent = '';
        computerscore.textContent = '';
        score = [0, 0]
        reset.remove();
        document.addEventListener("click", choiceListener);
    });
}

let choiceListener = function(event) {
    let element = event.target;
    if  (element.classList.contains("choice") || element.id === ('rockimg')) {
        selection = getSelection('Rock');
        playRound(selection);
        score = countScore(round, score, selection);
        endGame(score);
    } else if (element.classList.contains("choice") || element.id === ('paperimg')) {
        selection = getSelection('Paper');
        playRound(selection);
        score = countScore(round, score, selection);
        endGame(score);
    } else if (element.classList.contains("choice") || element.id === ('scissorsimg')) {
        selection = getSelection('Scissors');
        playRound(selection);
        score = countScore(round, score, selection);
        endGame(score);
    }
};

document.addEventListener("click", choiceListener);