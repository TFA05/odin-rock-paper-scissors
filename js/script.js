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

function playGame(){
    
    function finishGame(didWin){
        if (didWin) resultContainer.textContent = "VICTORY!!!!!!!\nPlay again?"
        else resultContainer.textContent = "LOSERRRRR\nPlay again?"

        reset = true;
    }

    function finishRound(hand, strong, weak, computerChoice){
        if (computerChoice === strong){
            resultContainer.textContent = `You lose! ${strong} beats ${hand}`;
            computerScore.textContent = Number(computerScore.textContent) + 1;
            humanScore.style.backgroundColor = 'black';
            computerScore.style.backgroundColor = 'red';
            sign.textContent = '<';

            if (computerScore.textContent === "3"){
                finishGame(false);
            }
        }
        else{
            resultContainer.textContent = `You win! ${hand} beats ${weak}`;
            humanScore.textContent = Number(humanScore.textContent) + 1
            humanScore.style.backgroundColor = 'green';
            computerScore.style.backgroundColor = 'black';
            sign.textContent = '>';


            if (humanScore.textContent === "3"){
                finishGame(true);
            }
        }
    }   

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        humanWeaponImg.src = `img/${humanChoice}.png`;
        computerWeaponImg.src = `img/${computerChoice}.png`;

        if (humanChoice === computerChoice){
            resultContainer.textContent = "Draw";
            computerScore.style.backgroundColor = 'black';
            humanScore.style.backgroundColor = 'black';
            sign.textContent = '=';
        }
        else if (humanChoice === "rock"){
            finishRound("rock", "paper", "scissors", computerChoice);
        }
        else if (humanChoice === "paper"){
            finishRound("paper", "scissors", "rock", computerChoice);
        }
        else{
            finishRound("scissors", "rock", "paper", computerChoice);
        }
    }

    let btnContainer = document.querySelector(".btnContainer");
    let resultContainer = document.querySelector(".result");
    let humanScore = document.querySelector(".humanScore");
    let computerScore = document.querySelector(".computerScore");
    let humanWeaponImg = document.querySelector(".humanWeapon");
    let computerWeaponImg = document.querySelector(".computerWeapon");
    let sign = document.querySelector(".sign");
    
    let reset = false;

    btnContainer.addEventListener("click", (e) => {
        if (reset){
            humanScore.textContent = 0;
            computerScore.textContent = 0;
            reset = false;
        }

        const targetButton = e.target.closest("button");
        if (!targetButton) return;

        switch(targetButton.className){
            case "rockBtn":
                playRound("rock", getComputerChoice());
                break;
            case "paperBtn":
                playRound("paper", getComputerChoice());
                break;
            case "scissorsBtn":
                playRound("scissors", getComputerChoice());
                break;
    }
})
}

playGame();