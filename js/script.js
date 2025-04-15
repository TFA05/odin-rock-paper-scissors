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

function playGame(){
    
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
    
        if (humanChoice === computerChoice){
            alert("Draw");
        }
        else if (humanChoice === "rock"){
            if (computerChoice === "paper"){
                alert("You lose! Paper beats Rock")
                computerScore++;
            }
            else{
                alert("You win! Rock beats Scisors")
                humanScore++;
            }
        }
        else if (humanChoice === "paper"){
            if (computerChoice === "scissors")
                {
                    alert("You lose! Scissors beat Paper")
                    computerScore++;            
            }
            else{
                alert("You win! Paper beats rock")
                humanScore++;
            }
        }
        else{
            if (computerChoice === "rock"){
                alert("You lose! Rock beats Scissors")
                computerScore++;
            }
            else{
                alert("You win! Scissors beat Paper")
                humanScore++;
            }
        }
    }
    
    let humanScore = 0;
    let computerScore = 0;

    let gameOver = false;
    while(!gameOver){
        playRound(getHumanChoice(), getComputerChoice());

        if (humanScore === 3){
            alert(`Congrats! You won! ${humanScore}-${computerScore}`);
            gameOver = true;
        }
        else if (computerScore === 3){
            alert(`You lost... ${humanScore}-${computerScore}`);
            gameOver = true;
        }
    }
}

playGame();