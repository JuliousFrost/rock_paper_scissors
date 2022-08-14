function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissors"]

    var item = choice[Math.floor(Math.random()*choice.length)];

    return item


}


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return ("TIE")
    }
    else if(playerSelection === "Rock" && computerSelection==="Paper"){
        return ("Computer Wins")
    }
    else if(playerSelection === "Rock" && computerSelection==="Scissors"){
        return ("Player Wins")
    }
    else if(playerSelection === "Paper" && computerSelection==="Rock"){
        return ("Player Wins")
    }
    else if(playerSelection === "Paper" && computerSelection==="Scissors"){
        return ("Computer Wins")
    }
    else if(playerSelection === "Scissors" && computerSelection==="Paper"){
        return ("Player Wins")
    }
    else if(playerSelection === "Scissors" && computerSelection==="Rock"){
        return ("Computer Wins")
    }
}




function game(){

    let player_score = 0
    let com_score = 0

    for (let i =0;i<5;i++){
        let playerSelection = prompt("please write Rock / Paper / Scissors")
        console.log("Player - " + playerSelection)

        let computerSelection = getComputerChoice()
        console.log("Computer - " +computerSelection)

        round_result = playRound(playerSelection,computerSelection)
        console.log(round_result)
        console.log("..........................................")


        if(round_result === "Player Wins"){
            player_score = player_score + 1
        }
        if(round_result === "Computer Wins"){
            com_score = com_score+1
        }



    }

    if (player_score === com_score){
        console.log("Match Tie")
    }
    else if (player_score>com_score){
        console.log("You are the winner of the match")
    }
    else{
        console.log("Humanity has lost")
    }
}

game()
