import * as inputHandler from './InputHandler';


let ulDisplay = document.getElementById("gameDisplay");
let liCounter = 1
let gameResponse;
fetch('../Storage/GameResponses.json')
    .then(response => response.json())
    .then(data =>{gameResponse = data;})
.catch(error => console.error("Failed to load GameResponses.json", error));


function newLiChild(gameOutput){
    let liDisplay = document.createElement("li");
    liDisplay.innerHTML(gameOutput);
    liDisplay.setAttribute("id", liCounter)
    ulDisplay.appendChild(liDisplay);
    liCounter++;
}

export function gameUiUpdate(gameOutput){
    newLiChild(gameOutput);
}

export function userUiUpdate(userInput){
    newLiChild(userInput);
}