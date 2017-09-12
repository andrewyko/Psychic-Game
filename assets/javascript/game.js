//array lists computer options
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variables holding number of wins,losses,and guesses
var wins = 0;
var losses = 0;
var guessLeft = 10;
var guessSoFar = [];
  

//function run when user presses a key.
document.onkeyup = function(event) {
  //determines which key was pressed.
  var userGuess = event.key;

  //randomly chooses a choice from the computerChoices array. this is computer guess
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //this logic determines outcome of game
    if ((userGuess === computerGuess)){
      wins++; guessLeft = 10;
      }
    if ((userGuess !== computerGuess)){
      guessLeft--;
      if(guessLeft<1){losses++;
        guessLeft=10}
    }
    
  var Wins = 
  "<p>Wins:" + wins + "</p>"
  document.querySelector("#wins").innerHTML = wins;

  var Losses =
  "<p>Losses:" + losses + "</p>"
  document.querySelector("#losses").innerHTML = losses;

  var Guessesleft = 
  "<p>Guesses left:" + guessLeft + "</p>"
  document.querySelector("#guessLeft").innerHTML = guessLeft;

  var GuessesSF = 
  "<p>Your Guesses so far:" + guessSoFar + "</P>"
  document.querySelector("#guessSF").innerHTML = guessSoFar;
  
  }