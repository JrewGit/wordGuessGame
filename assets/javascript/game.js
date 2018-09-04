//Initiates the starting variables
var livesLeft = 10;
var win = false;
var userLetterGuess = [];
var blankSpace = [];
var wordList = ["Friends", "The Fresh Prince of Bel Air", "Family Matters", "Martin", "Full House", "All That", "Boy Meets World", "Saved By the Bell", "The Jamie Foxx Show", "Everybody Loves Raymond"];
var computerChoice = Math.floor(Math.random() * wordList.length);
var computerGuess = wordList[computerChoice];
var uppercaseComputerGuess = computerGuess.toUpperCase();
var lowercaseComputerGuess = computerGuess.toLowerCase();

//Grabs the HTML and connects the javascript
var updateWinStatement = document.getElementById("winStatement");
var updateLossStatement = document.getElementById("lossStatement");
var updateLives = document.getElementById("lives");
var updateLettersGuessed = document.getElementById("lettersGuessed");
var updateBlanks = document.getElementById("blanks");
updateBlanks.innerHTML = makeBlankSpace();
updateLives.textContent = livesLeft;

//resets the game
function reset() {
    livesLeft = 10;
    updateLives.textContent = livesLeft;
    win = false;
    userLetterGuess = [];
    updateLettersGuessed.innerHTML = userLetterGuess;
    blankSpace = [];
    updateBlanks.innerHTML = makeBlankSpace();
    computerChoice = Math.floor(Math.random() * wordList.length);
    computerGuess = wordList[computerChoice];
    console.log(computerGuess);
}

//prints the blank spaces on the screen as soon as the document is shown.
function makeBlankSpace() {
    for (var i = 0; i < computerGuess.length; i++) {
        if (computerGuess[i] === " ") {
            blankSpace.push("-");
        } else {
            blankSpace.push("_");
        };
    };
    return blankSpace.join(" ");
};

document.onkeyup = function (event) {

    var userGuess = event.key;

    //updates the array of letters that the user guessed so far.
    if ((userLetterGuess.indexOf(userGuess) === -1) && (livesLeft > 0) && (win === false)) {
        userLetterGuess.push(userGuess);
        updateLettersGuessed.textContent = userLetterGuess;
    };

    //Checks to see if the letter that the user guesses is in the comptuer's guess. If it is, then the letter that the user guessed fills in the necessary blanks.
    for (var i = 0; i < computerGuess.length; i++) {
        if ((userGuess === lowercaseComputerGuess[i] || userGuess === uppercaseComputerGuess[i]) && userGuess !== " ") {
            blankSpace[i] = computerGuess[i];
            updateBlanks.textContent = blankSpace.join(" ");
        };
    };

    //Decrements the lives left if the letter that the user guesses isn't a letter in the computer's guess.
    if ((lowercaseComputerGuess.indexOf(userGuess) === -1) && (livesLeft > 0) && (win === false)) {
        livesLeft -= 1;
        updateLives.textContent = livesLeft;
    };

    //Prints loss statement if lives === 0.
    if (livesLeft === 0) {
        updateLossStatement.textContent = "Oooo, so close! Hit 'Space' to try again";
        if (userGuess === " ") {
            reset();
        }
    };

    //Prints win statement if there are no more blank spaces.
    if (blankSpace.indexOf("_") === -1) {
        win = true;
        updateWinStatement.textContent = "You did it! Hit 'Space' to play again";
        if (userGuess === " ") {
            reset();
        }
    };

    console.log(userGuess);

};

console.log(computerGuess);
