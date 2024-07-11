let resume = true
let userscore = 0
let compscore = 0
let score = "score \n "+ userscore + "vs"+ compscore
while(resume){
    let random = Math.floor(Math.random()*3)
    choices = ['rock', 'paper', 'scissors']
   
    let userchoice = prompt("rock, paper, or scissors?")
    alert(userchoice +' vs. '+ choices[random])
    let results = ['its a tie!', 'you lose!', 'you won!']
   
    if(userchoice === null){
        resume = confirm("Continue the game?")
        break;
    }
    else if (userchoice.toLowerCase() =='rock'){
       switch(random){
           case 0:
               alert(results[0])
               break;
           case 1:
               alert(results[1])
               compscore ++
               break;
           case 2:
               alert(results[2])
               userscore ++
               break;
       }
    }else if(userchoice.toLowerCase() == 'paper'){
       switch(random){
           case 0:
               alert(results[2])
               userscore ++
               break
           case 1:
               alert(results[0])
               break
           case 2:
               alert(results[1])
               compscore ++
               break
       }
    }else if(userchoice.toLowerCase() == 'scissors'){
       if (random == 0){
           alert(results[1])
           compscore ++
           
       }else if (random == 1){
           alert(results[2])
           userscore++
           
       }else if (random == 2){
           alert(results[0])
           
       }
    }
    score = "score \n "+ userscore + " vs "+ compscore
    alert(score)
    let gamewinner = ''
    if (userscore == 5 || compscore == 5){
        if(userscore ==5){
            gamewinner = 'USER'
        }else if(compscore ==5){
            gamewinner = 'COMPUTER'
        }
        alert(`round finished! GAME WINNER: ${gamewinner}!`)
        break;
    }
    // resume = confirm("Continue the game?")
   
}

alert('Thank you for playing')