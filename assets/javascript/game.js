var livesLeft = 10;
var userLetterGuess = [];
var blankSpace = [];
var wordList = ["Friends", "The Fresh Prince of Bel Air", "Family Matters", "Martin", "Full House", "All That", "Boy Meets World", "Saved By the Bell", "The Jamie Foxx Show", "Everybody Loves Raymond"];
var computerChoice = Math.floor(Math.random() * wordList.length);
var computerGuess = wordList[computerChoice];

var updateLives = document.getElementById("lives");
var updateLettersGuessed = document.getElementById("lettersGuessed");
var updateBlanks = document.getElementById("blanks");
updateBlanks.innerHTML = makeBlankSpace();
updateLives.textContent = livesLeft;

function reset() {
    livesLeft = 0;
    userLetterGuess = [];
    computerChoice = Math.floor(Math.random() * wordList.length);
    computerGuess = wordList[computerChoice];
}

function makeBlankSpace() {
    for (var i = 0; i < computerGuess.length; i++) {
        // blankSpace.push("_");
        if (computerGuess[i] === " ") {
            blankSpace.push(" ");
        } else {
            blankSpace.push("_");
        }
  };
    return blankSpace.join(',');
}

document.onkeyup = function (event) {

    var userGuess = event.key;
    
    if (userGuess === computerGuess.toLowerCase()[0] || userGuess === computerGuess.toUpperCase()[0]) {
        blankSpace[0] = computerGuess[0];
        updateBlanks.textContent = blankSpace;
    }

};

console.log(computerGuess);