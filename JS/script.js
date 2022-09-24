console.log('Hello World')

/** 
 * Writing the function for computer selection.
 * Computer selects either of the rock or paper or scissors
 * 
 */

 function selectedChoice(usrChc) {
    let userChoice  =  usrChc.toUpperCase()
    const computerChoice = getComputerChoice()
    console.log('user choice is: ' + userChoice)
    console.log('computer choice is: ' + computerChoice)

    let winner = playground(userChoice,computerChoice) 
    console.log(winner)
}

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

function playground(userChoice,computerChoice) {
    if (userChoice == 'ROCK' && computerChoice == 'PAPER') {
        return 'computer won'
    }else if (userChoice == 'ROCK' && computerChoice == 'SCISSORS') {
        return 'user won'
    }else if(userChoice == 'ROCK' && computerChoice == 'ROCK') {
        return 'It\'s a tie'
    }else if (userChoice == 'PAPER' && computerChoice == 'PAPER') {
        return 'It\'s a tie'
    }else if (userChoice == 'PAPER' && computerChoice == 'SCISSORS') {
        return 'computer won'
    }else if(userChoice == 'PAPER' && computerChoice == 'ROCK') {
        return 'user won'
    }else if (userChoice == 'SCISSORS' && computerChoice == 'PAPER') {
        return 'user won'
    }else if (userChoice == 'SCISSORS' && computerChoice == 'SCISSORS'){ 
        return 'It\'s a tie'
    }else if(userChoice == 'SCISSORS' && computerChoice == 'ROCK') {
        return 'computer won'
    }
}


// getUserChoice()
// function playGround() {
//     let cc=0
//     let uc=0
//     let userChoice
//     let computerChoice
//     while(cc<5 || uc<5) {
//         userChoice = getUserChoice()
//         computerChoice = getComputerChoice()
//         console.log('user choice is: ' + userChoice)
//         console.log('Computer choice is: ' + computerChoice)
//         if (userChoice == 'ROCK' && computerChoice == 'PAPER') {
//          cc++
//         }else if (userChoice == 'ROCK' && computerChoice == 'SCISSORS') {
//             console.log('user wins')
//             uc++
//         }else if(userChoice == 'ROCK' && computerChoice == 'ROCK') {
//             console.log('It\'s a tie')
//         }else if (userChoice == 'PAPER' && computerChoice == 'PAPER') {
//             console.log('It\'s a tie')
//         }else if (userChoice == 'PAPER' && computerChoice == 'SCISSORS') {
//             console.log('computer wins')
//             cc++
//         }else if(userChoice == 'PAPER' && computerChoice == 'ROCK') {
//             console.log('user wins')
//             uc++
//         }else if (userChoice == 'SCISSORS' && computerChoice == 'PAPER') {
//             console.log('user wins')
//             uc++
//         }else if (userChoice == 'SCISSORS' && computerChoice == 'SCISSORS'){ 
//             console.log('It\'s a tie')
//         }else if(userChoice == 'SCISSORS' && computerChoice == 'ROCK') {
//             console.log('computer wins')
//             cc++
//         }
//     }

//     if(uc == 5){
//         console.log('User finally won and celebrates')
//     }
//     else{
//         console.log('Computer finally won and celebrates')
//     }
// }

//playGround()


