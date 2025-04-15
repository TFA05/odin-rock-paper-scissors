function getComputerChoice(){
    let randNumb = Math.floor(Math.random() * 3) + 1
    switch (randNumb){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        default:
            return "Scissors";
    }
}

function getHumanChoice(){
    return prompt('Select between Rock, Paper and Scissors')
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice){
        return "Draw";
    }
    
    if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            alert("You lose! Paper beats Rock")
            humanScore++;
        }
        else{
            alert("You win! Rock beats Scisors")
            computerScore++;
        }
    }
    else if (humanChoice === "paper"){
        if (computerChoice === "scissors")
            {
                alert("You lose! Scissors beat Paper")
                humanScore++;            
        }
        else{
            alert("You win! Paper beats rock")
            computerScore++;
        }
    }
    else{
        if (computerChoice === "rock"){
            alert("You lose! Rock beats Scissors")
            humanScore++;
        }
        else{
            alert("You win! Scissors beat Paper")
            computerScore++;
        }
    }
}

let humanScore = 0;
let computerScore = 0;

playRound(getHumanChoice(), getComputerChoice());

