console.log('Hello World')

/** 
 * Writing the function for computer selection.
 * Computer selects either of the rock or paper or scissors
 * 
 */

function getComputerChoice() {
    let min = 1
    let max = 4
    let num = Math.floor(Math.random() * (max - min)) + min
    switch(num){
        case 1 : return "ROCK"
        case 2 : return "PAPER"
        case 3 : return "SCISSORS"
        default : return "Invalid Number"
    }
}

function getUserChoice() {
    let choice = prompt('Enter the choice')
    return choice.toUpperCase()
}

let userChoice = getUserChoice()
let computerChoice = getComputerChoice()
console.log('User choice is: ' + userChoice)
console.log('Computer choice is: ' + computerChoice)

if (userChoice == 'ROCK' && computerChoice == 'PAPER') {
    console.log('computer wins')
}else if (userChoice == 'ROCK' && computerChoice == 'SCISSORS') {
    console.log('user wins')
}else if(userChoice == 'ROCK' && computerChoice == 'ROCK') {
    console.log('It\'s a tie')
}else if (userChoice == 'PAPER' && computerChoice == 'PAPER') {
    console.log('It\'s a tie')
}else if (userChoice == 'PAPER' && computerChoice == 'SCISSORS') {
    console.log('computer wins')
}else if(userChoice == 'PAPER' && computerChoice == 'ROCK') {
    console.log('user wins')
}else if (userChoice == 'SCISSORS' && computerChoice == 'PAPER') {
    console.log('user wins')
}else if (userChoice == 'SCISSORS' && computerChoice == 'SCISSORS') { 
    console.log('It\'s a tie')
}else if(userChoice == 'SCISSORS' && computerChoice == 'ROCK') {
    console.log('computer wins')
}


