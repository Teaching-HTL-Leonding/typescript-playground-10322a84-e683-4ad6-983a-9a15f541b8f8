const WIDTH = 500;
const HEIGHT = 300;

// Enter the word to guess here.
//                   vvv
//                   vvv
const wordToGuess = "apple";

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background("black");

  let wordToScramble = wordToGuess
  let scramledWord = "";
  while (wordToScramble.length > 0) {
    let letterIndex = Math.floor(random(wordToScramble.length))
    scrambledWord += wordToScramble[letterIndex]
    wordToScramble = wordToScramble.substring(0, letterIndex)
      + wordToScramble.substring(letterIndex + 1)
  }
}

// This method will be called automatically when the user clicks "Guess".
// The guessed text will be in "textInput".
function guess(textInput: string) {
  // <<< Add your code here
}
