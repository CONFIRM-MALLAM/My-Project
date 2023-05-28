

buttonColours =["red", "blue", "green", "yellow"];
gamePattern =[];
 var randomChosenColour = Math.random()*buttonColours;

function nextSequence(){
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
}

nextSequence();