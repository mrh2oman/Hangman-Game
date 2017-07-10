var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var lives = 10; //lives
var wins = 0;  //games won
var losses = 0; //games lost
var userGuesses = []; //stored guess for player

var words = ["example", "placeholder", "word", "dingleberry"]; //bank of words, since I didn't get it working i didn't fill in the bank

var computerGuess = words[Math.floor(Math.random()*words.length)]; //random word 
//Replace word with "_" and display word

document.onkeydown = function(event) {
console.log(computerGuess);

var playerGuess = String.fromCharCode(event.keyCode).toLowerCase(); //player Guess


// if playerGuess is equal to any letter in computerGuess 
	//reveal letter on screen;
	//userGuesses[userGuesses.length]=playerGuess;

//if playerGuess is not equal to any letter in computerGuess;
	//lives--;
	//userGuesses[userGuesses.length]=playerGuess;

//if all of the computerGuess word is revealed;
	// wins++;
	// alert("You Won! Congrats. Make another guess to continue");
	// var lives = 10; //reset lives to 10
	// var userGuesses = []; //empty out the guessed letters pool
	// var computerGuess = words[Math.floor(Math.random()*words.length)]; //choose new word


//if lives = 0;
	//losses--;
	//alert("You Lost! Sorry about that. The computer choose the word - " + computerGuess ". Guess a new letter to start another game.");
	// var lives = 10; //reset lives to 10
	// var userGuesses = []; //empty out the guessed letters pool
	// var computerGuess = words[Math.floor(Math.random()*words.length)]; //choose new word

