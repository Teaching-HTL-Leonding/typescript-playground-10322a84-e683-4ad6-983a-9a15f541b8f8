function setup() {
  createCanvas(200, 200);
  background("lightgray");


  drawDice()
}

function drawDice() {
  const dicePointDiameter: number = 30; // Size of a dot
  const diceSize = 200; // size of dice (width and height)

  const dice = floor(random(1, 7));

  // draw black dice surface
  fill("black");
  noStroke();
  rect(0, 0, diceSize, diceSize);

  // draw dots
  fill("white");
  if (dice === 1 || dice === 3 || dice === 5) {
    circle(diceSize / 2, diceSize / 2, dicePointDiameter);
  }
  if (dice !== 1) {
    circle(diceSize / 4, diceSize / 4, dicePointDiameter);
    circle(3 * diceSize / 4, 3 * diceSize / 4, dicePointDiameter);
  }
  if (dice >= 4) {
    circle(3 * diceSize / 4, diceSize / 4, dicePointDiameter);
    circle(diceSize / 4, 3 * diceSize / 4, dicePointDiameter);
  }
  if (dice === 6) {
    circle(diceSize / 4, diceSize / 2, dicePointDiameter);
    circle(3 * diceSize / 4, diceSize / 2, dicePointDiameter);
  }
}
