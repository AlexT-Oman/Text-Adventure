function checkUserInputAllowsNextLocation(userInput){
    let isPossibleNextLocation = false;
    userInput = userInput.toLowerCase();
    let i;
    for(i = 0; i < gameData.nextPossibleLocations.length(); i++){
        if(userInput === gameData.nextPossibleLocations[i].toLowerCase()){
            isPossibleNextLocation = true
        }
    }
    return isPossibleNextLocation;
}