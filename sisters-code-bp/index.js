// jQuery Functions Go Here 
$('#rock').click(function(){
	game('rock');
})

$('#paper').click(function(){
	game('paper');
})

$('#scissors').click(function(){
	game('scissors')
})

// Computer Range for Game
// rock = 1-3
// paper = 4-7
// scissors = 8-10


// Game function starts here
function game(choice) {
	// Defining our computer variable
	var computer = Math.floor(Math.random() * 10) + 1;
	
	// if computer chose rock
	if(computer <= 3){
		// user conditionals here
		if(choice === 'rock'){
			$('#result').html("It's a tie! The computer chose rock too.")
			}
		else if(choice === 'paper'){
			$('#result').html("You Win! The computer chose rock.")	
		}
		else{
			$('#result').html("You Lose! The computer chose rock.")
		}
	}
	
	// if computer chose paper
	else if(computer >=4 && computer <=7){
		// user conditionals here
		if(choice === 'rock'){
			$('#result').html("You Lose! The computer chose paper.")
			}
		else if(choice === 'paper'){
			$('#result').html("It's a tie! The computer chose paper too.")	
		}
		else{
			$('#result').html("You Win! The computer chose scissors.")
		}
	}

	// if computer chose scissors
	else {
		// user conditionals here
		if(choice === 'rock'){
				$('#result').html("You Win! The computer chose scissors.")
				}
		else if(choice === 'paper'){
				$('#result').html("You Lose! The computer chose scissors.")	
			}
		else{
				$('#result').html("It's a tie! The computer chose scissors too.")
			}	
	}

}
