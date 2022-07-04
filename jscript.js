
let r = () => console.log(play("Rock", computerPlay()));
let p = () => console.log(play("Paper", computerPlay()));
let s = () => console.log(play("Scissors", computerPlay()));

document.getElementById("Rock").addEventListener("click", r);
document.getElementById("Paper").addEventListener("click", p);

document.getElementById("Scissors").addEventListener("click", s);



function computerPlay() {
    let x = Math.floor(Math.random() * 3 + 1);
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





function play(playerSelection, computerSelection) {
playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
if (playerSelection == "Rock") {
    if (computerSelection == "Rock") {
        displayResults("Rock and Rock: Tie");
        return "Tie";
    }
    if (computerSelection == "Paper") {
        displayResults("Paper beats Rock: You lost");
        return "You lost!";
    }
    if (computerSelection == "Scissors") {
        displayResults("Rock beats Scissors: You won!");
        return "You won!";
    }
}
if (playerSelection == "Scissors") {
    if (computerSelection == "Rock") {
        displayResults("Rock beats Scissors: You lost");
        return "You lost";
    }
    if (computerSelection == "Paper") {
        displayResults("Scissors beats Paper: You won");
        return "You won!";
    }
    if (computerSelection == "Scissors") {
        displayResults("Scissors and Scissors");
        return "Tie!";
    }
}
if (playerSelection == "Paper") {
    if (computerSelection == "Rock") {
        displayResults("Paper beats Rock: You won");
        return "You won!";
    }
    if (computerSelection == "Paper") {
        displayResults("Paper and Paper: Tie");
        return "Tie!";
    }
    if (computerSelection == "Scissors") {
        displayResults("Scissors beats Paper: You lost");
        return "You lost!";
    }
}
}



function displayResults(str) {
    
    const container = document.querySelector("#container");
    if (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
        const div = document.createElement('div');
        div.classList.add("result");
        div.textContent = str;
        div.style.fontSize = '30px';
        container.appendChild(div);
    } else {
        const div = document.createElement('div');
        div.classList.add("result");
        div.textContent = str;
        div.style.fontSize = '30px';
        container.appendChild(div);
    }
    

}


