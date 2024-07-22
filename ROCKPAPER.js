let resume = true
let userscore = 0
let compscore = 0
let score = "score \n "+ userscore + " vs "+ compscore
let random = 0


let userChoice = ''
let compChoices = ['rock', 'paper', 'scissors']
let results = ['its a tie!', 'you lose!', 'you won!']

let userDivChoice = document.querySelector('.userDivChoice')
let compDivChoice = document.querySelector('.compDivChoice')
let buttonChoices = document.querySelectorAll('.buttonChoices button')

let resultDiv = document.querySelector('.result')
let scoreDiv = document.querySelector('.score')


let winner = document.querySelector('.winner')
document.getElementById('closeButton').addEventListener('click', ()=> {
    winner.style.display = 'none'
})
buttonChoices.forEach(index => {
    index.addEventListener('click', playRound)
})

function playRound(e){
    random = Math.floor(Math.random()*3)
    compDivChoice.textContent = compChoices[random]
    userDivChoice.textContent = e.target.textContent
    userChoice = e.target.textContent.toLowerCase()
    if (compChoices[random] == 'scissors'){
        compDivChoice.style.fontSize = '135px'
    }else{
        compDivChoice.style.fontSize = '155px'
    }
    if (userChoice == 'scissors'){
        userDivChoice.style.fontSize = '135px'
    }else{
        userDivChoice.style.fontSize = '155px'
    }


    if(e.target.textContent.toLowerCase() == compChoices[random]){
        resultDiv.textContent = results[0]
    }
    else if(
        (userChoice == 'rock' && compChoices[random] == 'scissors') ||
        (userChoice == 'paper' && compChoices[random] == 'rock') ||
        (userChoice == 'scissors' && compChoices[random] == 'paper')
    ) {
        
        resultDiv.textContent = results[2]
        userscore ++    
        
    }else{        
        resultDiv.textContent = results[1]
        compscore++
    }     
    scoreDiv.textContent = "score: \n "+ userscore + " vs "+ compscore

    if (userscore == 5 || compscore == 5){               
        let whoswinner = document.querySelector('.winner span')
        if (userscore == 5){
            whoswinner.textContent = 'WINNER IS: USER !'
            
            winner.style.display = 'flex'
        }
        else if(compscore == 5){            
            whoswinner.textContent = 'Computer Wins !'
            winner.style.display = 'flex'
        }                    
        userscore = 0
        compscore = 0
        scoreDiv.textContent = "score: \n "+ userscore + " vs "+ compscore
        
    }
}
