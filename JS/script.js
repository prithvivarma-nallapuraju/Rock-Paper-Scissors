console.log('Hello World')

/** 
 * Writing the function for computer selection.
 * Computer selects either of the rock or paper or scissors
 * 
 */

 let uc = 0
 let cc = 0

 function selectedChoice(usrChc) {
    let userChoice  =  usrChc.toUpperCase()
    const computerChoice = getComputerChoice()
    let winner = ''
    displayImg(userChoice,computerChoice)
    winner = playground(userChoice,computerChoice) 
    
    if(uc == 0 || uc > 5) {
        document.getElementById("player-score").innerHTML = 0
    }
    if(cc == 0 || cc > 5) {
        document.getElementById("computer-score").innerHTML = 0
    }
    
    if(winner == 'user won') {
        uc = uc+1
        document.getElementById("player-score").innerHTML = uc
    }else if(winner == 'computer won') {
        cc = cc+1
        document.getElementById("computer-score").innerHTML = cc
    }else {
        document.getElementById("player-score").innerHTML = uc
        document.getElementById("computer-score").innerHTML = cc
    }

    if(uc == 5) {
        swal({
            title: "Good job!",
            icon: "success",
            button: "Play Again",
          });
        uc = 0
        cc = 0
        document.querySelector(".swal-button").addEventListener('click', () => {
          window.location.reload(true)  
        })
        
    }
    if(cc == 5) {
        swal({
            title: "Better luck next time!",
            icon: "error",
            button: "Play Again",
          });
        cc = 0
        uc = 0
        document.querySelector(".swal-button").addEventListener('click', () => {
            window.location.reload(true)  
          })
    }

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

function displayImg(userChoice,computerChoice) {
    let userImg = document.getElementById("player-output-img")
    let computerImg = document.getElementById("computer-output-img")

    if(userChoice === 'ROCK') {
        userImg.src = "./Assets/fist.png"
    }else if(userChoice === 'PAPER') {
        userImg.src = "./Assets/paper.png"
    }else if(userChoice === 'SCISSORS') {
        userImg.src = "./Assets/scissors.png"
    }else {
        userImg.src = "./Assets/question-mark.png"
    }

    if(computerChoice === 'ROCK') {
        computerImg.src = "./Assets/fist.png"
    }else if(computerChoice === 'PAPER') {
        computerImg.src = "./Assets/paper.png"
    }else if(computerChoice === 'SCISSORS') {
        computerImg.src = "./Assets/scissors.png"
    }else {
        computerImg.src = "./Assets/question-mark.png"
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


