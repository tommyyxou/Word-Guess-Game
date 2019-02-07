// Global Var
var wordLibrary = ["ACURA", "AUDI", "BENTLEY", "BMW", "BUGATTI", "BUICK", 
"CADILLAC", "CHEVROLET", "CHRYSLER", "CITROEN", "DODGE", "FERRARI", "FIAT", 
"FORD", "GENESIS", "GMC", "HONDA", "HYUNDAI", "INFINITI", "JAGUAR", "JEEP", 
"KIA", "KOENIGSEGG", "LAMBORGHINI", "LEXUS", "LINCOLN", "LOTUS", "MASERATI", 
"MAZDA", "MCLAREN", "MERCEDES", "MINI", "MITSUBISHI", "NISSAN", "PAGANI", 
"PEUGEOT", "PORSCHE", "RENAULT", "SUBARU", "TESLA", "TOYOTA", "VOLKSWAGEN", 
"VOLVO"];

var randomWord = "";
var letters = [];
var output = [];
var wrongLetters =[];
var lives = 20;
var wins = 0;
var losses = 0;
var numberOfLetters = 0;



/* working random work choice */
function randomWordGenerator () {

    //console.log (wordLibrary);
    //console.log ("Number of Words:", wordLibrary.length);

    var randomNumber = Math.floor(Math.random() * (wordLibrary.length++));

    //console.log ("Random Number Generated:", randomNumber);
    //console.log ("Random Word Chosen:", wordLibrary[randomNumber]);

    var letters = wordLibrary[randomNumber].split("");
    numberOfLetters = letters.length;

    //console.log (letters);
    //console.log ("Number of Letters:", numberOfLetters);

    for(var i = 0; i < numberOfLetters; i++) {
        output.push("_")
        //console.log(output)
    }

    document.getElementById("secretWord").innerText = output.join(" ");
    document.getElementById ("word").innerText = wordLibrary[randomNumber]

}

/* Game Status */
function displayInfo () {
    document.getElementById("win").innerHTML = wins;
    document.getElementById("lose").innerHTML = losses;
    document.getElementById("live").innerHTML = lives;
}

/* Key Input */


function checkLetter (letter) {

    var letterInWord = false;
    console.log (letterInWord);
    console.log (numberOfLetters);
  
    for(var i = 0; i < numberOfLetters; i++) {
        console.log (i);

        console.log ("Check Letter:", letter);
        if (letter == letters[i]);
        console.log (letters[i]);
        {
        letterInWord = true;
        console.log (letterInWord);
        }
    }
   
    if (letterInWord) {
      for(var i = 0; i < numberOfLetters; i++) {
        if (letters[i] == letter) {
          output[i] = letter;
          console.log(output)
        }         
      }
    } else {
        wrongLetters.push(letter);
        //console.log (wrongLetters)
        lives--;
    }
    
  }

document.onkeypress = function(event) {

    var keyInput = event.key;
    console.log (keyInput);
    checkLetter (keyInput);
}






/*Logging Letter into Array
var guessRight = [];

document.onkeydown = function(event) {

var x = event.key;
guessRight.push (x)

console.log (guessRight)
}
*/



//Checking Functions for letters
/*
document.onkeypress = function(event) {

    var inputkey = event.key;
        console.log (letters.length)
        for (var i = 0; i < letters.length; i++) {
            if (letters[i] == inputkey) {
                
                console.log (inputkey);
                
                return;
            }

            else {
                guessWrong.push (inputkey)
                console.log (guessWrong)
                
                return;
            }
        }

}
*/




