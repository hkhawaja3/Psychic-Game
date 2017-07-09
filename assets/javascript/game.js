    
        //Here is the Javascript code for the Psychic game! I tried my best to explain each step!

         // setting wins and losses to 0 and guesses to 9
         var wins = 0;
         var losses = 0;
         var guessesLeft = 9;


        // array to push user choices to and computer choices
         var guessesSoFar = []; 
         var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from
    
        // using onkeyup to start a function 
        document.onkeyup = function(event) {

        //taking in user guess
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 

        //computer selects random letter
        var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; 
        
        //using index of to not allow repeat of the same letter
        if (guessesSoFar.indexOf(userGuess) === -1){
          
          //pushing user guess to guesses so far
          guessesSoFar.push(userGuess); 
        
        //if user guess equals the computer guess then wins go up 1
        if (userGuess == computerGuess) {
            wins++;
            alert('You Won!');
            
            //reseting the guesses back to 9 so that the user can play again
            guessesLeft = 9; 
            
            //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
            guessesSoFar.length = 0; 
        }
        
        //using this else if whenever the user is out of guesses the losses go up 1 and resets back to 9 
        else if (guessesLeft == 0){
            losses++;
            alert('Lets try again.');
            guessesLeft = 9;
            guessesSoFar.length = 0;
        }
        
        //this else if means if the user guess does not equal the computer guess
        else if (userGuess !== computerGuess){
            
            //decreasing the guesses left
            guessesLeft--; 
        }    
        }
        
        // Taking the wins/losses/guesses and displaying them in HTML    
        var html = "<h1>The Psychic Game</h1>" + 
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Total Wins: " + 
        wins + 
        "</p>" +
        "<p>Total Losses: " + 
        losses + 
        "</p>" +
        "<p>Guesses Left: " + 
        guessesLeft + 
        "</p>" +
        "<p>Your Guesses so far: " +
        guessesSoFar +
        "</p>"
        ;
        


        // Placing the html into the game ID
        document.querySelector('#game').innerHTML = html;
    }




    var Yes = 0;
    var No = 0;


    $(document).ready(function() {


      $("#Yes").on("click", function() {
          Yes++;
          alert(Yes);



          });

      $("#No").on("click", function() {
          No++
          alert(No);
          });

       });
