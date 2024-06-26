//two variables are used one track user score and one to track computer score
let userScore = 0;
let compScore = 0;

// we shoud also keep track of the choices choosen by user and computer, access them first
const choices = document.querySelectorAll(".choice");
// to show msg on screen
const msg = document.querySelector("#msg");

//to update user and comp score on screen
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
// rock, paper, scissor generated reandomly
    const ranId = Math.floor(Math.random() * 3);
    return options[ranId];
}

// function for draw game
const drawGame = () => {
    //console.log("Game was draw")
    msg.innerText = "Game was draw Play again!";
    msg.style.backgroundColor = "#132519";
}

// show winner
const showWinner = (userWin , userChoice, compChoice) => {
    if (userWin) {
        userScore ++ ;
        userScorePara.innerText = userScore;
        //console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        //console.log("You lose!");
        msg.innerText = `You lost!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


//play game logic
const playGame = (userChoice) => {
    //console.log("userChoice: " , userChoice);
    // Generate computer choice randomly ->modular way of programming
    const compChoice = genCompChoice();
    //console.log("Generating computer choice=" , compChoice);

    if (userChoice == compChoice) {
        drawGame();// draw game
    }
    // win condition
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissor , paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
           // rock , scissor
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner (userWin , userChoice , compChoice);
    }
};

// This will get user choice
// adding event listner to choices,
choices.forEach((choice)=> {
    //console.log(choice); prints all the div which has img
    choice.addEventListener("click",()=>{
        //we get user's choice
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});

