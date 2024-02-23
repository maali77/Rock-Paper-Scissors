function getComputerChoice(){
    let computer_choice, num_gen;

    num_gen = Math.floor(Math.random()*3)+1;
    if(num_gen == 1){
        computer_choice = "Rock";
    }
    else if(num_gen == 2){
        computer_choice = "Paper";
    }
    else if (num_gen == 3){
        computer_choice = "Scissors";
    }
    else{
        getComputerChoice();
    }
    return computer_choice.toUpperCase();

}

function getPlayerChoice(){
    let player_choice;
    player_choice = prompt(" 1. Rock \n 2. Paper \n 3. Scissors \n Please enter a number 1 through 3");

    return player_choice.toUpperCase();
}
function playRound(computer_select,player_select){
    if(computer_select === player_select){
        return "Tie!";
    }
    else if(computer_select == "ROCK" && player_select == "PAPER"){
        score_player++;
        return `You have won! ${player_select} beats ${computer_select}!`;
    }
    else if(computer_select == "SCISSORS" && player_select == "ROCK"){
        score_player++;
        return `You have won! ${player_select} beats ${computer_select}`;
    }
    else if(computer_select == "PAPER" && player_select == "SCISSORS"){
        score_player++;
        return `You have won! ${player_select} beats ${computer_select}`;
    }
    else{
        score_computer++;
        return `You have lost! ${computer_select} beats ${player_select}`;
    }
}
function playGame(){
    for(let i =0; i < 5; i++){
        let c_choice = getComputerChoice();
        let p_choice = getPlayerChoice();
        alert(playRound(c_choice,p_choice));

    }
    if(score_player > score_computer){
        alert(`Congratulations! You have won with a score of ${score_player} out of 5`);

    }
    else {
        alert(`You have lost with a score of ${score}!`);

    }
}
let score_player = 0, score_computer = 0;
alert("lets play a game of Rock, Paper, and Scissors!");
playGame();