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
var wrongLetters = [];

var lives = 10;
var wins = 0;
var losses = 0;
var numberOfLetters = 0;



/* working random work choice */
function randomWordGenerator () {
  
  lives = 10;

  //console.log (wordLibrary);
  //console.log ("Number of Words:", wordLibrary.length);

  randomWord = wordLibrary[Math.floor(Math.random() * wordLibrary.length)]

  //console.log ("Random Number Generated:", randomNumber);
  //console.log ("Random Word Chosen:", wordLibrary[randomNumber]);

  letters = randomWord.split("");
  numberOfLetters = letters.length;

  //console.log (letters);
  //console.log ("Number of Letters:", numberOfLetters)

  for(var i = 0; i < numberOfLetters; i++) {
    output.push("_")
    //console.log(output)
  }

  document.getElementById("secretWord").innerText = output.join(" ");
  // document.getElementById ("word").innerText = randomWord;
  document.getElementById("win").innerHTML = wins;
  document.getElementById("lose").innerHTML = losses;
  document.getElementById("live").innerHTML = lives;

}

/* Checking Letter to see if it matches */
function checkLetter (letter) {

  var letterInWord = false;
    for(var i = 0; i < numberOfLetters; i++) {
      // console.log (i);
      //console.log ("Check Letter:", letter);
      if (letters[i] === letter) {
        letterInWord = true;
      }
      //console.log ("iput", letter);
      //console.log ("array", letters[i]);
    }

    if (letterInWord) {
      for(var i = 0; i < numberOfLetters; i++) {
        if (letters[i] == letter) {
          output[i] = letter;
          //console.log(output)
          //console.log ("Check Letter:", letter);
          document.getElementById("secretWord").innerText = output.join(" ");
        } 
      }
    } 
    else { 
          console.log ("wrong Letter:", letter);
          wrongLetters.push(letter);
          document.getElementById("lettersGuessed").innerText = wrongLetters;
          lives--;
          document.getElementById("live").innerHTML = lives;
    }
// Still need to write Letters Guesssed Check for double.






//---------------------------------------------------------

/* winning condition*/
  if (randomWord == output.join("")) {
    console.log (randomWord);
    console.log (output.join(""));
    alert ("CONGRAT!!!, you win");
    wins++;
    reset ();
  } else { console.log ("word not match yet")};

  if (lives == 0) {
    alert ("Too Bad!!!, you lose");
    losses++;
    reset ();
  }


            
}
    
function reset () {

output = [];
wrongLetters = [];
document.getElementById("lettersGuessed").innerText = wrongLetters;

randomWordGenerator ();

}


/* Key Input */
document.onkeypress = function(event) {

    var keyInput = event.key;
    console.log ("Key pressed:", keyInput);
    checkLetter (keyInput);
}