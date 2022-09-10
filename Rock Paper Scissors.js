function getComputerChoice() {
    num = Math.floor(Math.random()*100);
    if (num < 33) {
        return 'Rock';
    }
    else if (num > 66) {
        return 'Scissors';
    }
    else {
        return 'Paper';
    }
}