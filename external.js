let computerString; 
let userString;
var compScore = 0;
var userScore = 0;

// RPS Function
function computerChoice() {
    let num = Math.floor(Math.random() * 3 ) + 1
    if (num == 1) {
        computerString = 'scissors';
    } else if (num == 2) {
        computerString = 'rock';
    } else {
        computerString = 'paper';
    }
}

// Question user, return answer
function question() {
    let answer = prompt("Rock, Paper, Scissors?");
    let caseSens = answer.toLowerCase();
    if (caseSens == 'scissors') {
        userString = 'scissors';
    } else if (caseSens == 'rock') {
        userString = 'rock';
    } else if (caseSens == 'paper'){
        userString = 'paper';
    } else {
        console.log('choose Rock, Paper, Scissors');
    }
}

//scenarios
function playRound(userString, computerString) {
    if (userString === "rock" && computerString === "paper") {
        compScore++;
        return (`Computer wins :( ${computerString} beats ${userString}`);
    } else if (userString === "paper" && computerString === "scissors") {
        compScore++;
        return (`Computer wins :( ${computerString} beats ${userString}`);
    } else if (userString === "scissors" && computerString === "rock") {
        compScore++;
        return (`Computer wins :( ${computerString} beats ${userString}`);
    } else if (userString === "rock" && computerString === "scissors") {
        userScore++;
        return (`You win! ${userString} beats ${computerString}`);
    } else if (userString === "paper" && computerString === "rock") {
        userScore++;
        return (`You win! ${userString} beats ${computerString}`);
    } else if (userString === "scissors" && computerString === "paper") {
        userScore++;
        return (`You win! ${userString} beats ${computerString}`);
    } else {
        return (`Tie, ${computerString} and ${userString} are equal`);
    } 
}

// winner 
function winners(userScore, compScore) {
    if (userScore < compScore) {
        console.log('You lose, \nbetter luck next time');
    } else if (userScore > compScore) {
        console.log('Winner winner chicken dinner!');
    } else {
        console.log('Tie game');
    }
}

//actual game
function game() { 
    playRound(userString, computerString);
    for (let i = 1; i < 6; i++) {
        computerChoice();
        question();
        console.log('Round ' + i + ' ' + playRound(userString, computerString));
        console.log(`your score: ${userScore} computer score ${compScore}`);
    }
    return winners(userScore, compScore);
}


game();