let won = 0;
let loose = 0;
let tie = 0;

function getComputerChoice() {
    let ray = ["rock", "paper", "scissors"];
    let x = Math.floor((Math.random() * 3) + 0);
    let computerChoice = ray[x];
    console.log(`Computer choose ${computerChoice}`);
    return computerChoice;
}

function getUserChoice() {
    let userChoice = prompt("choose from rock,paper and scissors");
    let userLowerChoice = userChoice.toLowerCase();
    console.log(`You choose ${userLowerChoice}`);
    return userLowerChoice;
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        won += 1;
        return console.log(`You Won! ${playerSelection} beats ${computerSelection}`);

    } else if(playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "rock") {
        loose += 1;
        return console.log(`You Loose! ${computerSelection} beats ${playerSelection}`);

    }else {
        tie += 1;
        return console.log(`${playerSelection} vs ${computerSelection} is a tie game`);
    }
}

function finalResult(){
    return console.log(`You won ${won} times, you loose ${loose} times, and total tie games are ${tie}`);
}


function playGame(n) {
    for(let i = 0; i < n; i+=1){
        playRound(getUserChoice(), getComputerChoice());
    }
    finalResult();
}
  
function promptUser(){
    let request = prompt("please open console to see game, u can do that by right clicking on anywhere in page, and then click inspect , then go to console and refresh page so that it start loading from start :) ");
    let nTimes = prompt("how many times u want to play game of rock-paper-scissors");
    return playGame(nTimes);
}
promptUser();