
let r = () => console.log(play("Rock", computerPlay()));
let p = () => console.log(play("Paper", computerPlay()));
let s = () => console.log(play("Scissors", computerPlay()));

document.getElementById("Rock").addEventListener("click", r);
document.getElementById("Paper").addEventListener("click", p);

document.getElementById("Scissors").addEventListener("click", s);

let val = 0;
let pcVal = 0;
// document.querySelector(".test").addEventListener("click", function score() {
    
//     const score = document.querySelector("#yourScore");
//     val++;
//     score.textContent = "Your Score: " + val; 
    
// });
// document.querySelector(".test2").addEventListener("click", function score() {
    
//     const score = document.querySelector("#pcScore");
//     pcVal++;
//     score.textContent = "Your Score: " + pcVal; 
    
// });

function computerPlay() {
    let x = Math.floor(Math.random() * 3) + 1;
        const message = document.querySelector(".scores");
    switch (x) {
        case 1: 
        return "Rock"
        break;
        case 2: 
        return "Paper";
        break;
        case 3: 
        return "Scissors";
    }
}



function score() {
    if (val + 1 == 5) {
        const message = document.querySelector(".scores");
        message.removeChild(message.lastElementChild);
        message.removeChild(message.lastElementChild);
        playAgain("win");
    } 


    const score = document.querySelector("#yourScore");
    val++;
    score.textContent = "Your Score: " + val; 
    
}
function scorePc() {
    if (pcVal + 1 == 5) {
        const message = document.querySelector(".scores");
        message.removeChild(message.lastElementChild);
        message.removeChild(message.lastElementChild);
        playAgain("lost");
    }
    const score = document.querySelector("#pcScore");
    pcVal++;
    score.textContent = "Computer's Score: " + pcVal; 
    
}
function playAgain(str) {
    const container = document.querySelector(".scores");
    const mess = document.createElement("div");
    mess.classList.add("mess");
    if (str == "win") {
        mess.textContent = "You Won! " + (val + 1) + `-` + pcVal;
        mess.setAttribute('style', 'font-size: 30px; color: blue;');
        container.appendChild(mess);
        
    } else if (str == "lost"){
        mess.textContent = "You Lost " + (val) + `-` + (pcVal + 1);
        mess.setAttribute('style', 'font-size: 30px; color: red;');
        container.appendChild(mess);
    }
    const buttonList = document.querySelector(".buts");

    for (let i = 0; i < 3; i++) {
        buttonList.removeChild(buttonList.lastElementChild);
    }
    const container2 = document.querySelector("#container");
    container2.removeChild(container2.lastElementChild); //remove??!?!??!/

    const playA = document.createElement("button");
    playA.classList.add("playAgain");
    playA.textContent = "Play Again?";
    container.appendChild(playA);
    playA.addEventListener("click", function() {
        location.reload();
    });

}


function play(playerSelection, computerSelection) {


playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
if (playerSelection == "Rock") {
    if (computerSelection == "Rock") {
        displayResults("Rock and Rock: Tie");
        return "Tie";
    }
    if (computerSelection == "Paper") {
        displayResults("Paper beats Rock: You lost");
        scorePc()
        return "You lost!";
    }
    if (computerSelection == "Scissors") {
        displayResults("Rock beats Scissors: You won!");
        score();
        return "You won!";
    }
}
if (playerSelection == "Scissors") {
    if (computerSelection == "Rock") {
        displayResults("Rock beats Scissors: You lost");
        scorePc()
        return "You lost";
    }
    if (computerSelection == "Paper") {
        displayResults("Scissors beats Paper: You won");
        score();
        return "You won!";
    }
    if (computerSelection == "Scissors") {
        displayResults("Scissors and Scissors: Tie");
        return "Tie!";
    }
}
if (playerSelection == "Paper") {
    if (computerSelection == "Rock") {
        displayResults("Paper beats Rock: You won");
        score();
        return "You won!";
    }
    if (computerSelection == "Paper") {
        displayResults("Paper and Paper: Tie");
        return "Tie!";
    }
    if (computerSelection == "Scissors") {
        displayResults("Scissors beats Paper: You lost");
        scorePc()
        return "You lost!";
    }
}
}





function displayResults(str) {
    
    const container = document.querySelector("#container");
    const div = document.createElement('div');
    if (container.hasChildNodes()) {
        container.removeChild(container.firstChild);

        div.classList.add("result");
        div.textContent = str;
        div.setAttribute('style', 'font-size: 30px; margin-bottom: 650px');
        container.appendChild(div);
    } else {

        div.classList.add("result");
        div.textContent = str;
        div.setAttribute('style', 'font-size: 30px; margin-bottom: 650px');
        container.appendChild(div);
    }
    

}