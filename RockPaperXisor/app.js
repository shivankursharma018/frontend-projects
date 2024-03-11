let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const uscore = document.querySelector("#userScore");
const cscore = document.querySelector("#computerScore");

const showWinner = (winner) => {
    if (winner) {
        userScore++;
        uscore.innerText = userScore;
        // console.log("You Win !");
        msg.innerText = "You win";
    }
    else {
        computerScore++;
        cscore.innerText = computerScore;
        // console.log("You Lose !");
        msg.innerText = "You lose";
    }
}

const randomChoice = () => {
    let options = ["rock", "paper", "scissor"];
    const optionsIndex = Math.floor(Math.random() * 3);
    return options[optionsIndex];
}

const game = (userChoice) => {
    // console.log(`user choice = ${userChoice}`);
    const computerChoice = randomChoice();
    // console.log(`Computer choice = ${computerChoice}`);
    if (userChoice === computerChoice) {
        // console.log("Draw Match");
        msg.innerText = "Game draw";
    }
    else {
        let winner = true;
        if (userChoice === "rock") {
            winner = computerChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            winner = computerChoice === "scissor" ? false : true;
        }
        else {
            winner = computerChoice === "rock" ? false : true;
        }
        showWinner(winner);
    }
}

choices.forEach((ch) => {
    ch.addEventListener("click", () => {
        const userChoice = ch.getAttribute("id");
        game(userChoice);
    });
});