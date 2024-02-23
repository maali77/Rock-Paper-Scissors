let scorePlayer = 0;
let scoreComputer = 0;
const buttons = document.querySelectorAll('button');
const resultsDiv = document.getElementById('results');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const outcome = compareSelections(playerSelection, computerSelection);

    resultsDiv.textContent += '\n' + outcome; // Append the new outcome

    if (outcome.includes('You have won')) {
        scorePlayer++;
    } else if (outcome.includes('You have lost')) {
        scoreComputer++;
    }

    updateScore();
    checkWinner();
}


function compareSelections(playerSelection, computerSelection) {
    // Tie scenario
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    }
  
    // Winning combinations for player
    if (playerSelection === "rock") {
      if (computerSelection === "scissors") {
        scorePlayer++;
        return "You win! Rock beats Scissors.";
      } else {
        scoreComputer++;
        return "You lose! Rock is beaten by Paper.";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        return "You win! Paper beats Rock.";
      } else {
        return "You lose! Paper is beaten by Scissors.";
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "paper") {
        return "You win! Scissors beat Paper.";
      } else {
        return "You lose! Scissors are beaten by Rock.";
      }
    }
  
    // This should never be reached, but added for completeness
    return "Invalid selection.";
}

function updateScore() {
    resultsDiv.textContent += `\nPlayer: ${scorePlayer} - Computer: ${scoreComputer}`;
}

function checkWinner() {
    if (scorePlayer >= 5 || scoreComputer >= 5) {
      const winner = scorePlayer > scoreComputer ? "Player" : "Computer";
      alert(`${winner} has won!`);
      // Reset scores for a new game
      scorePlayer = 0;
      scoreComputer = 0;
      updateScore();
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});
