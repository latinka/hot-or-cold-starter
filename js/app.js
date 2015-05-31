
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Declare variables ---*/
  	var guessCount = 0; 
  	var randomNumber;
  	var difference;
  	var newGuess;
  	var victory = false;
  	
  	/*--- Display Feedback ---*/
  	var displayFeedback = function(feedback) {
  		$("#feedback").text(feedback);
  	};

  	/*--- Clear guess field ---*/
  	var clearField = function() {
	$("#userGuess").val("").focus();
	};

	/*--- Show the number of guesses ---*/
	var guessNumber = function() {
		$("#count").text(guessCount);
	};

	/*--- Remove previous guesses ---*/
	var removeGuesses = function(){
		$("ul.guessBox li").remove();
	};

	/*--- Start a new game ---*/
	var newGame = function(){
  		randomNumber = Math.floor((Math.random() * 100) + 1);
		console.log("The secret number is " + randomNumber);
		guessCount = 0;
		guessNumber();
		displayFeedback("Make Your Guess!");
		clearField();
		removeGuesses();
		victory = false;
	};

	newGame();

  	/*--- User guesses ---*/
  	$("form").submit(function(event) {
  		if (victory === true) {
			alert("The victory is yours! Start a new game!");
		}
		else {
  		event.preventDefault();
  		newGuess = $("#userGuess").val();
  		difference = Math.abs(randomNumber - newGuess);
  		thermometer();
  		guessCount++;
  		guessNumber();
  		$("#guessList").append("<li>" + newGuess + "</li>");
  		clearField();
  		}
  	});

  	/*---Check the guess number and display feedback ---*/
  	var thermometer = function(){
  		if (difference === 0) {
  			displayFeedback("You're a hero!");
			victory = true;
		}
		else if (difference > 0 && difference <= 5 && newGuess < randomNumber) {
			displayFeedback("Scorching! Guess higher!");
		}
		else if (difference > 0 && difference <= 5 && newGuess > randomNumber) {
			displayFeedback("Scorching! Guess lower!");
		}
		else if (difference > 5 && difference <= 10 && newGuess < randomNumber) {
			displayFeedback("Burning! Guess higher!");
		}
		else if (difference > 5 && difference <= 10 && newGuess > randomNumber) {
			displayFeedback("Burning! Guess lower!");
		}
		else if (difference > 10 && difference <= 15 && newGuess < randomNumber) {
			displayFeedback("Very hot! Guess higher!");
		}
		else if (difference > 10 && difference <= 15 && newGuess > randomNumber) {
			displayFeedback("Very hot! Guess lower!");
		}
		else if (difference > 15 && difference <= 20 && newGuess < randomNumber) {
			displayFeedback("Hot! Guess higher!");
		}
		else if (difference > 15 && difference <= 20 && newGuess > randomNumber) {
			displayFeedback("Hot! Guess lower!");
		}
		else if (difference > 20 && difference <= 25 && newGuess < randomNumber) {
			displayFeedback("Warm! Guess higher!");
		}
		else if (difference > 20 && difference <= 25 && newGuess > randomNumber) {
			displayFeedback("Warm! Guess lower!");
		}
		else if (difference > 25 && difference <= 30 && newGuess < randomNumber) {
			displayFeedback("Lukewarm! Guess higher!");
		}
		else if (difference > 25 && difference <= 30 && newGuess > randomNumber) {
			displayFeedback("Lukewarm! Guess lower!");
		}
		else if (difference > 30 && difference <= 40 && newGuess < randomNumber) {
			displayFeedback("Cool! Guess higher!");
		}
		else if (difference > 30 && difference <= 40 && newGuess > randomNumber) {
			displayFeedback("Cool! Guess lower!");
		}
		else if (difference > 40 && difference <= 50 && newGuess < randomNumber) {
			displayFeedback("Cold! Guess higher!");
		}
		else if (difference > 40 && difference <= 50 && newGuess > randomNumber) {
			displayFeedback("Cold! Guess lower!");
		}
		else if (difference > 50 && difference <= 99 && newGuess < randomNumber) {
			displayFeedback("Freezing! Guess higher!");
		}
		else if (difference > 50 && difference <= 99 && newGuess > randomNumber) {
			displayFeedback("Freezing! Guess lower!");
		}
		else {
			alert("You must chose a number between 1 and 100!");
		}
  	};

  	/*--- Restart game  ---*/
  	$(".new").click(function(){
  		newGame();
  	});

});


