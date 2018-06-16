
// first thing we want to is set up our variables//

var cityChoices = [];
var cityChosen = {}; //initializes cityChosen to a random city on the choices of cities array

var usedCities = [];//fills with the used cities
var wins = 0; //counts with number of wins
var trackGuesses = [""]; //empty array that fills up with all of the letters the user has guessed
var guessesLeft = 0; //integer, tracks how man guesses the user has left
var currentGuess = 0; //integer, tracks how many times the user has guessed, used to index trackGuesses to display what letters the user has guessed to the screen
var correctCounter = 0; //tracks how many correct letters the user has guessed

//initalize each city as an object containing the name, picture, and description of the respective city
var austin = {
    name : "Austin",
    picture : "./assets/images/Austin.jpg",
    description : "Between March and October, an estimated 1.5 million bats emerge from under a bridge in the heart of this city",

};

var houston = {
    name : "Houston",
    picture : "./assets/images/Houston.jpg",
    description : "This city is home to the largest medical center in the world",

};
var madrid = {
    name : "Madrid",
    picture : "./assets/images/Madrid.jpg",
    description : "This city is home to the world's most successful football/soccer club of the 20th century",

};
var moscow = {
    name : "Moscow",
    picture : "./assets/images/Moscow.jpg",
    description : "Home of the Kremlin. This city also claims to be the home to the most billionaires in the world",

};
var denver = {
    name : "Denver",
    picture : "./assets/images/Denver.jpg",
    description : "This city is located exactly one mile above sea level. It also records an average of over 300 days of sunshine per year",

};
var portland = {
    name : "Portland",
    picture : "./assets/images/Portland.jpg",
    description : "This city is nicknamed the city of roses, and is located in one of two states were you cant pump your own gas",

};

var paris = {
    name : "Paris",
    picture : "./assets/images/Paris.jpg",
    description : "It is believed that there is only one stop sign throughout this entire city",

};

var london = {
    name : "London",
    picture : "./assets/images/London.jpg",
    description : "This city is the home of the oldest underground raiway network in the world",

};

var bogota = {
    name : "Bogota",
    picture : "./assets/images/Bogota.jpg",
    description : "This city is the home of Festival Iberoamericano de Teatro, the largest theater festival in the world",

};

var barcelona = {
    name : "Barcelona",
    picture : "./assets/images/Barcelona.jpg",
    description : "This city has two official languages. One of them is spanish",

};

var vancouver = {
    name : "Vancouver",
    picture : "./assets/images/Vancouver.jpg",
    description : "This city is home to Canada's largest pool, spanning 451 feet",

};

var milan = {
    name : "Milan",
    picture : "./assets/images/Milan.jpg",
    description : "This city is has the most skyscrapers in Italy",

};

var lima = {
    name : "Lima",
    picture : "./assets/images/Lima.jpg",
    description : "This South American Capital houses 1/3 of its country's population",

};

//push all objects into the array cityChoices[]
cityChoices.push(austin,houston,bogota,london,paris,portland,denver,moscow,madrid,barcelona,vancouver,milan,lima);

 
cityChosen = cityChoices[Math.floor(Math.random() * cityChoices.length)]; //sets the value of citychosen to the object of the city the user will guess depending random selection
usedCities[wins] = cityChosen.name; //filling the usedCities array with the name of the city that has been used

//this prints a set of lines equivalent to the number of characters in the string chosen by the computer
for (var i = 0; i < cityChosen.name.length; i++) {

    document.getElementById("line" + i).innerHTML = " _ ";

}

//set starting picture
document.getElementById("cityPicture").src=cityChosen.picture;
//set starting descrition
document.getElementById("cityDescription").innerHTML = cityChosen.description;

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
    
        for (i = 0; i < cityChosen.name.length; i ++) {
            if (userGuess === cityChosen.name.substring(i, (i + 1)).toLowerCase()) {
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
        if ( correctCounter === cityChosen.name.length) {

            //resets blanks on the screen. have to compare new city to old city. if old city has 
            //more chars I have to clear all of the spans before overwriting with "_"
            wins ++;

            for (var i = 0; i < cityChosen.name.length; i++) {

                document.getElementById("line" + i).innerHTML = " ";
            
            }


            cityChosen = cityChoices[Math.floor(Math.random() * cityChoices.length)]; //resets city to guess


            //ensures you cycle through all cities
            while (usedCities.includes(cityChosen.name)) {
                cityChosen = cityChoices[Math.floor(Math.random() * cityChoices.length)];
                //set to length of cityChoices since wins is incremented before this code
                if (wins === cityChoices.length)
                {
                    alert("you travelled around the world! Congrats");
                    return;
                }
            }

            usedCities[wins] = cityChosen.name; //adds the new city to the used cities array

            //sets blanks to size of new city char length
            for (var i = 0; i < cityChosen.name.length; i++) {

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


            //change picture
            document.getElementById("cityPicture").src=cityChosen.picture;
            //change descrition
            document.getElementById("cityDescription").innerHTML = cityChosen.description;
        



        
        }   else if (guessesLeft === 0) {

            //going to reset all counters, user will start over on the city they are on
            alert("you lose, hit ok to keep trying");
            
            for (var i = 0; i < cityChosen.name.length; i++) {

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



            //this implies the user is out of guesses
            
        }

    } else if(trackGuesses.includes(userGuess)) {
        
        alert("you already guessed that letter bretherrrrrrrrr")


    }
    
      else {

            alert("please enter a valid input");
    }

}