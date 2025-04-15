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

console.log(getComputerChoice());