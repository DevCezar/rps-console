let computerString; 
let userString;

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
    let answer = prompt("Rock, Paper, Scissors... SHOOT!");
    let caseSens = answer.toLowerCase();
    if (caseSens == 'scissors') {
        userString = 'scissors';
    } else if (caseSens == 'rock') {
        userString = 'rock';
    } else if (caseSens == 'paper'){
        userString = 'paper';
    } else {
        console.log('invalid choice, choose Rock, Paper, Scissors');
    }
}

//scenarios
function playRound(userString, computerString) {
    if (userString === "rock" && computerString === "paper") {
        return (`Computer wins :( ${computerString} beats ${userString}`);
    } else if (userString === "paper" && computerString === "scissors") {
        return (`Computer wins :( ${computerString} beats ${userString}`);
    } else if (userString === "scissors" && computerString === "rock") {
        return (`Computer wins :( ${computerString} beats ${userString}`);
    } else if (userString === "rock" && computerString === "scissors") {
        return (`You win! ${userString} beats ${computerString}`);
    } else if (userString === "paper" && computerString === "rock") {
        return (`You win! ${userString} beats ${computerString}`);
    } else if (userString === "scissors" && computerString === "paper") {
        return (`You win! ${userString} beats ${computerString}`);
    } else if (userString === computerString ) {
        return (`Tie, ${computerString} and ${userString} are equal`);
    } else {
        return 'try again'
    }
}

computerChoice();
question()
console.log(playRound(userString, computerString));
playRound();
