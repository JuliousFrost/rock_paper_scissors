function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"]

    var item = choice[Math.floor(Math.random() * choice.length)];

    return item


}
let player_score = 0
let com_score = 0
let finalWinner = ""

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper"
    ) {
        return 1;
    }

    else return 2;
}




function game(e) {

    let winner = parseInt(playRound(e.target.id, getComputerChoice()))

    switch (winner) {

        case 0:
            break;
        case 1:
            player_score++;
            break;
        case 2:
            com_score++;
            break;
        default:
            break;
            
    }
    addRoundInfo();


}




function getWinner(player_score,com_score) {
     if (player_score > com_score) {
        return "You are the winner of the match";
    }
    else {
        return "AI is the winner of the match";

    }


}

let checkWinner = () => {
    if (player_score == 5 || com_score == 5){
        return true;
    }
    else{
        return false;
    } 
};



function addRoundInfo(){
    const mainController = document.querySelector(".mainContain");
    const roundInfo = document.createElement("p");
    roundInfo.innerText = `Your Score is ${player_score} | AI Score is ${com_score}`;
    mainController.appendChild(roundInfo);

    if(checkWinner()){
        const mainContain = document.querySelector(".mainContain");
        const roundInfo = document.createElement("p");
        if (player_score > com_score) {
            finalWinner = "You are the winner of the match";
        }
        else {
            finalWinner =  "AI is the winner of the match";
    
        }
        roundInfo.innerText = finalWinner;
        mainContain.appendChild(roundInfo);
        player_score = 0
        com_score = 0

    }
}

function removeRoundInfo(){
    const mainContainer = document.querySelector(".mainContain");
    while(mainContainer.firstChild){
        mainContainer.removeChild(mainContainer.firstChild);
    }
    player_score = 0
    com_score = 0
}

const buttons = document.querySelectorAll('.playButton');
buttons.forEach(button => button.addEventListener('click', game));

const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener('click', removeRoundInfo);
