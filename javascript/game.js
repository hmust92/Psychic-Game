
var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var guessedLetters = [];
var userLetterGuess = null;



var computerChoice = alphabets[Math.floor(Math.random() * alphabets.length)];


var updateuserLetterGuess = function() {
  userLetterGuess = computerChoice;

  };

var updateGuessesRemaining = function() {
  
  document.querySelector('#guessRemaining').innerHTML = "Guesses left: " + guessesRemaining;
};



var updateGuessesSoFar = function() {
   
  document.querySelector('#guessesSoFar').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

var reset = function() {
  
  guessesRemaining = 9;
  guessedLetters = [];
  computerChoice = alphabets[Math.floor(Math.random() * alphabets.length)];

  updateuserLetterGuess();
  updateGuessesRemaining();
  updateGuessesSoFar();
}

updateuserLetterGuess();
updateGuessesRemaining();



document.onkeyup = function(event) {
  guessesRemaining--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesRemaining();
  updateGuessesSoFar();

        if (guessesRemaining > 0){
            if (userGuess == userLetterGuess){
                wins++;
                document.querySelector('#win').innerHTML = "Wins: " + wins;
                alert("Yes! The letter was '" + computerChoice + "'! you are psychic!");
                reset();
            }
        }else if(guessesRemaining == 0){
            
            losses++;
            document.querySelector('#loss').innerHTML = "Losses: " + losses;
            alert("Sorry, you're not psychic, maybe try again?");
          
            reset();
        }
};