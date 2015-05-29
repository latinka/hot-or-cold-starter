
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Restart game  ---*/
  	$(".new").click(function(){
  		console.log("New game");
  		randomNumber;
  	});

  	/*--- Declare variables ---*/
  	var randomNumber = Math.floor((Math.random() * 100) + 1);
  		console.log("The secret number is " + randomNumber);
  	var guessCount = 0;
  	var newGuess = $("#userGuess").val();
  	var victory = false;
  	var difference = Math.abs(randomNumber - newGuess);
  	
  	

  	/*--- Display Feedback ---*/
  	var displayFeedback = function(feedback) {
  		$("#feedback").text(feedback);
  	};

  	/*--- User guesses ---*/
  	$("form").submit(function(event) {
  		console.log("UserGuess");
  		event.preventDefault();
  		thermometer();
  	});

  	/*---Check the guess number and display feedback ---*/
  	var thermometer = function(){
  		console.log("thermometer()");
  		if (difference === 0) {
  			displayFeedback("You're a hero!");
			$("#userGuess").val(randomNumber + "!");
			victory = true;
		}
		else if (difference > 1 && difference < 10) {
			displayFeedback("Very hot!");
		}
		else if (difference > 10 && difference < 20) {
			displayFeedback("Hot!");
		}
		else if (difference > 20 && difference < 30) {
			displayFeedback("Warm!");
		}
		else if (difference > 30 && difference < 50) {
			displayFeedback("Cold!");
		}
		else if (difference > 50 && difference < 99) {
			displayFeedback("Ice cold!");
		}
		else {
			alert("You must chose a number between 1 and 100!")
		}
  	};

});


