var winRecordId = document.getElementById("win-record");
var loseRecordId = document.getElementById("lose-record");
var yourGuessId = document.getElementById("your-guess");
var guessLeftId = document.getElementById("guess-count");

var winCounter = 0;
var loseCounter = 0;
var guessCounter = 9;
var allGuesses = "";

// var counter = "9";
document.onkeyup = function(event) {
  var userGuess = event.key;
  allGuesses = allGuesses.concat(userGuess + ", ");
  yourGuessId.textContent = allGuesses;

  // console.log(userGuess);

  var compChoice = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  var compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
  console.log(compGuess);

  function resetGuessCounter() {
    guessCounter = 9;
    guessLeftId.textContent = guessCounter;
  }

  function resetGuessInput() {
    allGuesses = "";
    yourGuessId.textContent = allGuesses;
  }

  if (compGuess !== userGuess) {
    // console.log(false);
    guessCounter--;
    if (guessCounter == 0) {
      loseCounter++;
      resetGuessCounter();
      resetGuessInput();
    }
  } else {
    winCounter++;
    resetGuessInput();
  }

  winRecordId.textContent = winCounter;
  loseRecordId.textContent = loseCounter;
  guessLeftId.textContent = guessCounter;
};
