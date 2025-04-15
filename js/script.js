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
    
    function whoWon(hand, strong, weak, computerChoice){
        if (computerChoice === strong){
            alert(`You lose! ${strong} beats ${hand}`)
            computerScore++;
        }
        else{
            alert(`You win! ${hand} beats ${weak}`)
            humanScore++;
        }
    }

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
    
        if (humanChoice === computerChoice){
            alert("Draw");
        }
        else if (humanChoice === "rock"){
            whoWon("rock", "paper", "scissors", computerChoice);
        }
        else if (humanChoice === "paper"){
            whoWon("paper", "scissors", "rock", computerChoice);
        }
        else{
            whoWon("scissors", "rock", "paper", computerChoice);
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