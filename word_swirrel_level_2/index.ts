const WIDTH = 500;
const HEIGHT = 300;
const MARGIN = 50;

const wordToGuess = "apple";

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background("black");
  textAlign(CENTER, CENTER);
  colorMode(HSB);
  angleMode(DEGREES);

  let wordToScramble = wordToGuess
  let scrambledWord = ""

  while(wordToScramble.length > 0) {
    let letterIndex = Math.floor(random(wordToScramble.length))
    scrambledWord += wordToScramble[letterIndex]
    wordToScramble = wordToScramble.substring(0, letterIndex)
      + wordToScramble.substring(letterIndex + 1)
  }

  textAlign(CENTER, CENTER)
  fill("white")
  textSize(75)
  for (let i = 0; i < scrambledWord.length; i++) {
    text(scrambledWord[1], random(20, 470), random(20, 270))
  }
}

function guess(textInput: string) {
  fill("white");

  if (textInput === wordToGuess) {
    background("green");
    textSize(75);
    text("Correct!", WIDTH / 2, HEIGHT / 2);
  } else {
    background("red");
    textSize(50);
    text(`Wrong!\nIt was "${wordToGuess}"`, WIDTH / 2, HEIGHT / 2);
  }
}
