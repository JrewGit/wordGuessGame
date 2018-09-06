//Initiates the starting variables
var livesLeft = 5;
var win = false;
var userLetterGuess = [];
var blankSpace = [];
var wordList = ["Friends", "The Fresh Prince of Bel Air", "Family Matters", "Martin", "Full House", "All That", "Boy Meets World", "Saved By the Bell", "The Jamie Foxx Show", "Everybody Loves Raymond"];
var computerChoice = Math.floor(Math.random() * wordList.length);
var computerGuess = wordList[computerChoice];
var uppercaseComputerGuess = computerGuess.toUpperCase();
var lowercaseComputerGuess = computerGuess.toLowerCase();
var images = ["https://qph.fs.quoracdn.net/main-qimg-f2b92b861436a17b7b5b24ef13e15ac7-c","https://i.ytimg.com/vi/VS3pCtH5A8M/maxresdefault.jpg","https://images-na.ssl-images-amazon.com/images/I/91ws9GU7ZCL._SL1500_.jpg","https://images-na.ssl-images-amazon.com/images/I/71jos2ODTuL._RI_.jpg", "https://images-na.ssl-images-amazon.com/images/I/814BEhT9BKL._RI_.jpg", "https://upload.wikimedia.org/wikipedia/en/7/72/All_That_-_logo.png", "https://is5-ssl.mzstatic.com/image/thumb/Video/v4/d1/6f/6e/d16f6e8a-621e-fe23-e926-888ac373a057/source/1200x630bb.jpg", "https://images-na.ssl-images-amazon.com/images/I/51BJ45PWN4L._SY445_.jpg", "https://images-na.ssl-images-amazon.com/images/I/61ZMIHf6vnL._SY445_.jpg", "http://www.everybodylovesray.com/wp-content/uploads/2017/01/elr-hp.jpg"]

//Grabs the HTML and connects the javascript
var updateWinStatement = document.getElementById("winStatement");
var updateLossStatement = document.getElementById("lossStatement");
var updateLives = document.getElementById("lives");
var updateLettersGuessed = document.getElementById("lettersGuessed");
var updateBlanks = document.getElementById("blanks");
updateBlanks.innerHTML = makeBlankSpace();
updateLives.textContent = livesLeft;

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

// gets the image
function showPicture(src, height, width, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.height = height;
  img.width = width;
  img.alt = alt;

  return document.getElementById("result").appendChild(img);
}

//resets the game
function reset() {
    livesLeft = 5;
    updateLives.textContent = livesLeft;
    win = false;
    userLetterGuess = [];
    updateLettersGuessed.innerHTML = userLetterGuess;
    computerChoice = Math.floor(Math.random() * wordList.length);
    computerGuess = wordList[computerChoice];
    uppercaseComputerGuess = computerGuess.toUpperCase();
    lowercaseComputerGuess = computerGuess.toLowerCase();
    blankSpace = [];
    updateBlanks.innerHTML = makeBlankSpace();
    document.getElementById("result").innerHTML = ""
    updateWinStatement.textContent = "";
    updateLossStatement.textContent = "";
    console.log(computerGuess);
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
        if ((userGuess === lowercaseComputerGuess[i] || userGuess === uppercaseComputerGuess[i]) && (userGuess !== " ") && (livesLeft > 0)) {
            blankSpace[i] = computerGuess[i];
            updateBlanks.innerHTML = blankSpace.join(" ");
        };
    };

    //Decrements the lives left if the letter that the user guesses isn't a letter in the computer's guess.
    if ((lowercaseComputerGuess.indexOf(userGuess) === -1) && (livesLeft > 0) && (win === false)) {
        livesLeft -= 1;
        updateLives.textContent = livesLeft;
    };

    //Prints loss statement if lives === 0.
    if ((livesLeft === 0)) {
        showPicture(images[computerChoice],300,300,computerGuess);
        updateLossStatement.textContent = "Oooo, so close! The show was '" + computerGuess + "'. Hit 'Space' to try again";
        if (userGuess === " ") {
            reset();
        }
    };


    //Prints win statement if there are no more blank spaces.
    if ((blankSpace.indexOf("_") === -1) && (livesLeft > 0)) {
        win = true;
        showPicture(images[computerChoice],300,300,computerGuess);
        updateWinStatement.textContent = "You did it! Hit 'Space' to play again";
        if (userGuess === " ") {
            reset();
        };
    };

    console.log(userGuess);

};

console.log(computerGuess);
