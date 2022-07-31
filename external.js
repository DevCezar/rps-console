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

// compare user 'round' value vs computerChoice 
function playRound(userString, computerString) {

}


function playRound(userString, computerString) {
  if (userString === "rock" && computerString === "paper") {
    return 'computer wins';
  } else {
    return 'tie'
  }
}

computerChoice();
question()
console.log(playRound(userString, computerString));
playRound();

// note for me add the other if else return scenarios