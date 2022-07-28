// RPS Function
function computerChoice() {
    let num = Math.floor(Math.random() * 3 ) + 1
    console.log(num);
    if (num == 1) {
        console.log('scissors');
    } else if (num == 2) {
        console.log('rock');
    } else {
        console.log('paper');
    }
}

// Question user, return answer
function question() {
    let answer = prompt("Rock, Paper, Scissors... SHOOT!");
    let caseSens = answer.toLowerCase();
    if (caseSens == 'scissors') {
        console.log('scissors2');
    } else if (caseSens == 'rock') {
        console.log('rock2');
    } else if (caseSens == 'paper'){
        console.log('paper2');
    } else {
        console.log('invalid');
    }
}

// compare user 'round' value vs computerChoice 
function result() {
    computerChoice();
    question()
}

question();
