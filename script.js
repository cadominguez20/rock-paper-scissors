function getComputerChoice() {
    var choice =  Math.floor(Math.random()*3)
    if(choice === 0){
        return 'rock'
    } else if (choice === 1){
        return 'scissors'
    } else if (choice === 2){
        return 'paper'
    }
}

function round(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === 'rock'){
        if(computerSelection === 'rock'){
            return 'Tie'
        } else if (computerSelection === 'paper'){
            return 'You lose! Paper beats rock.'
        } else if (computerSelection === 'scissors'){
            return 'You win! Rock beats scissors.'
        }
    } else if (playerSelection.toLowerCase() === 'paper'){
        if(computerSelection === 'rock'){
            return 'You win! Paper beats rock.'
        } else if (computerSelection === 'paper'){
            return 'Tie'
        } else if (computerSelection === 'scissors'){
            return 'You lose! Scissors beats paper.'
        }
    } else if (playerSelection.toLowerCase() === 'scissors'){
        if(computerSelection === 'rock'){
            return 'You lose! Rock beats scissors.'
        } else if (computerSelection === 'paper'){
            return 'You win! Scissors beats paper.'
        } else if (computerSelection === 'scissors'){
            return 'Tie'
        }
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt('Please enter rock, paper or scissors:')
        let computerSelection = getComputerChoice();
        console.log(round(playerSelection, computerSelection));
    }
}

game();