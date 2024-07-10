 let random = Math.floor(Math.random()*3)
 choices = ['rock', 'paper', 'scissors']

 let userchoice = prompt("rock, paper, or scissors?")
 alert(userchoice +' vs. '+ choices[random])
 let results = ['its a tie!', 'you lose!', 'you won!']

 if (userchoice.toLowerCase() =='rock'){
    switch(random){
        case 0:
            alert(results[0])
            break;
        case 1:
            alert(results[1])
            break;
        case 2:
            alert(results[2])
            break;
    }
 }else if(userchoice.toLowerCase() == 'paper'){
    switch(random){
        case 0:
            alert(results[2])
        case 1:
            alert(results[0])
        case 2:
            alert(results[1])
                
    }
 }else if(userchoice.toLowerCase() == 'scissors'){
    if (random == 0){
        alert(results[1])
    }else if (random == 1){
        alert(results[2])
    }else if (random == 2){
        alert(results[0])
    }
 }
 console.log(random)