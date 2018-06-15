
// first thing we want to is set up our variables//

var cityChoices = ["Austin", "Bogota", "Houston", "London", "Paris", "Madrid", "Portland", "Denver", "Moscow"];
var cityChosen =""; //initializes cityChosen to a random city on the choices of cities array

var usedCities = [];//fills with the used cities
var wins = 0; //counts with number of wins
var trackGuesses = [""]; //empty array that fills up with all of the letters the user has guessed
var guessesLeft = 0; //integer, tracks how man guesses the user has left
var currentGuess = 0; //integer, tracks how many times the user has guessed, used to index trackGuesses to display what letters the user has guessed to the screen
var correctCounter = 0; //tracks how many correct letters the user has guessed


var placesPicture = {
    Austin : "../images/Austin.jpg",
    Bogota : "../images/Bogota.jpg",
    Houston : "../images/Houston.jpg",
    London : "../images/London.jpg",
    Paris : "../images/Paris.jpg",
    Portland : "../images/Portland.jpg",
    Denver : "../images/Denver.jpg",
    Moscow : "../images/Moscow.jpg",
    Madrid : "../images/Madrid.jpg",

};

 
cityChosen = cityChoices[Math.floor(Math.random() * cityChoices.length)]; //sets the value of citychosen to the city the user will guess depending random selection
usedCities[wins] = cityChosen; //filling the usedCities array with city that has been used

//this prints a set of lines equivalent to the number of characters in the string chosen by the computer
for (var i = 0; i < cityChosen.length; i++) {

    document.getElementById("line" + i).innerHTML = " _ ";

}


//checks how many guesses are left in the HTML document
guessesLeft = document.getElementById("guesses").innerHTML;
//takes string received from document function and turns it into an integer
guessesLeft = parseInt(guessesLeft);










//all logic comparing user input to chosen string and changing output accordingly needs to be done within this function//


document.onkeyup = function(event) {

    var guessFlag = 0;
    var userGuess = event.key;
    // can make this a function to check user input
    userGuess.toLowerCase();
    //check for valid input from user. checks if input is a single letter and if it is a repeated input
    if (userGuess.length === 1 && userGuess.match(/[a-z]/i) && !(trackGuesses.includes(userGuess))) {

        //this fills an array to track the letters the user has guessed and will be displayed to the screen
        trackGuesses[currentGuess] = userGuess;
        document.getElementById("lettersGuessed").innerHTML = trackGuesses;

        currentGuess++;
    
        for (i = 0; i < cityChosen.length; i ++) {
            if (userGuess === cityChosen.substring(i, (i + 1)).toLowerCase()) {
                //add letter to blanks in html code//
                document.getElementById("line" + i).innerHTML = userGuess;
                //cant return since there could be duplicate letters in code//

                correctCounter ++; //incrament this counter for each correct letter, then compare to string length of correct city to see if user has won
                guessFlag = 1; //if guess flag is greater than 0, this means the user guessed a correct letter
            } 

        }
        if (guessFlag < 1) {
            //this means the guess was wrong //
            guessesLeft = guessesLeft - 1;
            document.getElementById("guesses").innerHTML = guessesLeft;
            //have to reduce the number of tries the user has left//
        }
        //print letter that was guessed to the screen in correct location//


        //runs when the sure guesses the correct word. Resets all variables and sets new word
        if ( correctCounter === cityChosen.length) {

            //resets blanks on the screen. have to compare new city to old city. if old city has 
            //more chars I have to clear all of the spans before overwriting with "_"
            wins ++;

            for (var i = 0; i < cityChosen.length; i++) {

                document.getElementById("line" + i).innerHTML = " ";
            
            }


            cityChosen = cityChoices[Math.floor(Math.random() * cityChoices.length)]; //resets city to guess


            //ensures you cycle through all cities
            while (usedCities.includes(cityChosen)) {
                cityChosen = cityChoices[Math.floor(Math.random() * cityChoices.length)];
                //set to length of cityChoices since wins is incremented before this code
                if (wins === cityChoices.length)
                {
                    alert("you travelled around the world! Congrats");
                }
            }

            usedCities[wins] = cityChosen; //adds the new city to the used cities array

            //sets blanks to size of new city char length
            for (var i = 0; i < cityChosen.length; i++) {

                document.getElementById("line" + i).innerHTML = " _ ";
            
            }

            //reset counters
            correctCounter = 0;
            currentGuess = 0;
            guessesLeft = 10;
            document.getElementById("guesses").innerHTML = guessesLeft;

            //reset guess arrays
            trackGuesses = [""];
            document.getElementById("lettersGuessed").innerHTML = trackGuesses
        



        
        }   else if (guessesLeft === 0) {

            //going to reset all counters, user essentially has to start over
            alert("you lose");
            //this implies the user is out of guesses
            
        }

    } else {

        alert("please enter a valid input");
    }

}