let playerScore = 0;
let computerScore = 0;
let tie = 0;
let roundsPlayed = 0;

const result = document.querySelector('#results');
const dual = document.querySelector('#bothOptions');
const oneResults = document.querySelector('#oneResult');

function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 0);
    switch(randomNumber) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    dual.textContent = `you choose ${playerSelection} and computer choose ${computerSelection}`;
    if (playerSelection === computerSelection) {
        tie += 1;
        oneResults.textContent = `${playerSelection} vs ${computerSelection} is a tie game`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore += 1;
        oneResults.textContent = `You Won! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore += 1;
        oneResults.textContent =  `You Lost! ${computerSelection} beats ${playerSelection}`;
    }
}

function finalResult(){
    alert("ready for final result");
    result.textContent = (`You won ${playerScore} times, you loose ${computerScore} times, and total tie games are ${tie}`);
}

function playGame() {

    const choiceButtons = document.querySelectorAll('button');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            result.textContent = `you choose ${button.textContent}`;
            playRound(button.textContent,getComputerChoice());
            if(playerScore === 5 || computerScore === 5) {
                finalResult();
                playerScore = 0;
                computerScore = 0;
                roundsPlayed = 0;
            } else {
                result.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
            }
        })

    });
}
playGame();