// Global Var
var wordLibrary = ["alien", "backtothefuture", "inception", "interstellar",
 "jurassicpark", "matrix", "starwars", "themartian"];

var randomWord = "";
var letters = [];
var output = [];
var wrongLetters = [];

var lives = 10;
var wins = 0;
var losses = 0;
var numberOfLetters = 0;

var wrongLettersLength = 0;



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

      /*--------------------------------- Wrong Letters: check for double ---------------------------------*/
      /*
      console.log (letter);
      if (wrongLettersLength == 0) {
        wrongLetters.push(letter);
        document.getElementById("lettersGuessed").innerText = wrongLetters;
        //console.log ("1 @ number of wrong letters:", wrongLetters.length);
        //console.log ("when i = 0", wrongLetters);
        wrongLettersLength = wrongLetters.length;
      } 

      else {

        var wrongLetterInArray = false;

        for (var x = 0; x < wrongLetters.length; x++) {

        //console.log ("2 @ number of wrong letters:", wrongLetters.length);  

          if (letter == wrongLetters[x]) {
            wrongLetterInArray = true;
          } 
          
          console.log (wrongLetterInArray);

          if (wrongLetterInArray) {
            
              if (letter == wrongLetters[x]) {
                return;
              } 
              
              
              

            
            
          }
          wrongLetters.push(letter);
          document.getElementById("lettersGuessed").innerText = wrongLetters;
          lives--;
          document.getElementById("live").innerHTML = lives;



        }
     } 

      
      */

      /*--------------------------------- Wrong Letter: Does not check for double ---------------------------------*/
      
      
      console.log ("wrong Letter:", letter);
      wrongLetters.push(letter);
      document.getElementById("lettersGuessed").innerText = wrongLetters;
      lives--;
      document.getElementById("live").innerHTML = lives
      
      
    }

/* winning condition*/
  if (randomWord == output.join("")) {
    console.log (randomWord);
    console.log (output.join(""));
    document.getElementById("secretWord").innerText = randomWord;
    console.log (output)
    var carName = randomWord;
    //alert ("CONGRAT!!!, You Win. The Word is: " + carName);

    wins++;

    var queMusic = randomWord;
    playMusic (queMusic);
  } else { console.log ("word not match yet")};

  if (lives == 0) {
    var carName = randomWord;
    alert ("Too Bad!!!, You Lose. The Word is: " + carName);
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

function playMusic(queMusic){
  document.getElementById("themeSong").innerHTML = "<audio controls autoplay src='./assets/audio/" + queMusic + ".mp3' type='audio/mp3'></audio>;" 
  document.getElementById("background").innerHTML = "<img src='./assets/images/" + queMusic + ".gif'>"
  reset ();
}