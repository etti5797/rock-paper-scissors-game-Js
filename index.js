

const scoreTable = document.querySelector("#score");
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const resultDisplay = document.querySelector("#result");

let computerOptions = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;


rockBtn.addEventListener("click", ()=>{
    updateScore("rock");
});
paperBtn.addEventListener("click", ()=>{
    updateScore("paper");
});
scissorsBtn.addEventListener("click", ()=>{
    updateScore("scissors");
});

function updateScore(userChoice)
{
    let computerChoice = computerTurn();

    if(computerChoice == userChoice)
    {
        displayTieMessage(userChoice);
        
    }
    else if((computerChoice == "rock" && userChoice == "scissors") 
    || (computerChoice == "paper" && userChoice == "rock" )
    || (computerChoice == "scissors" && userChoice == "paper"))
    {
        computerScore += 1;
        displayResultMessage(userChoice, computerChoice);
        updateScoreTable(userScore, computerScore);
    }
    else{
        userScore += 1;
        displayResultMessage(userChoice, computerChoice);
        updateScoreTable(userScore, computerScore);   
    }

    // inner functions: 
    function computerTurn()
    {
        let choice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
        return choice;
    }
    

    function displayTieMessage(userChoice)
    {
        switch(userChoice)
        {
            case "rock":
                document.querySelector("#TieRock").style.display = "block";
                setTimeout(() => document.querySelector("#TieRock").style.display = "none", 1300);
                break;
            case "paper":
                document.querySelector("#TiePaper").style.display = "block";
                setTimeout(() => document.querySelector("#TiePaper").style.display = "none", 1300);
                break;
            case "scissors":
                document.querySelector("#TieScissors").style.display = "block";
                setTimeout(() => document.querySelector("#TieScissors").style.display = "none", 1300);
                break;
        }  
    }

    function updateScoreTable(userScore, computerScore)
    {
        scoreTable.textContent =`${userScore}:${computerScore}`;
    }
    
    function displayResultMessage(userChoice, computerChoice)
    {
        if(userChoice == "paper")
        {
            switch(computerChoice)
            {
                case "rock":
                    document.querySelector("#userPaperWinRock").style.display = "block";
                    setTimeout(() => document.querySelector("#userPaperWinRock").style.display = "none", 1300);
                    break;
                case "scissors":
                    document.querySelector("#computerScissorsWinPaper").style.display = "block";
                    setTimeout(() => document.querySelector("#computerScissorsWinPaper").style.display = "none", 1300);
                    break;
            }
        }
        else if(userChoice == "rock")
        {
            switch(computerChoice)
            {
                case "paper":
                    document.querySelector("#computerPaperWinRock").style.display = "block";
                    setTimeout(() => document.querySelector("#computerPaperWinRock").style.display = "none", 1300);
                    break;
                case "scissors":
                    document.querySelector("#userRockWinScissors").style.display = "block";
                    setTimeout(() => document.querySelector("#userRockWinScissors").style.display = "none", 1300);
                    break;
            }
        }
        else
        {
            switch(computerChoice)
            {
                case "paper":
                    document.querySelector("#userScissorsWinPaper").style.display = "block";
                    setTimeout(() => document.querySelector("#userScissorsWinPaper").style.display = "none", 1300);
                    break;
                case "rock":
                    document.querySelector("#computerRockWinScissors").style.display = "block";
                    setTimeout(() => document.querySelector("#computerRockWinScissors").style.display = "none", 1300);
                    break;
            }

        }

    }
    
}


