let gameResponse;
let helpResponse;
let gameData;

fetch('../Storage/GameResponses.json')
    .then(response => response.json())
    .then(data =>{gameResponse = data;})
.catch(error => console.error("Failed to load GameResponses.json", error));
fetch('../Storage/HelpResponses.json')
    .then(response => response.json())
    .then(data => {helpResponse = data})
.catch(error => console.error("Failed to load HelpResponses.json", error))
fetch('../Storage/GameData.json')
    .then(response => response.json())
    .then(data => {gameData = data})
.catch(error => console.error("Failed to load GameData.json", error))