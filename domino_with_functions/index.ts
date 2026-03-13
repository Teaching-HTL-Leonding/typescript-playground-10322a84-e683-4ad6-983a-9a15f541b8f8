function setup() {
  createCanvas(400, 200);
  background("lightgray");

  const dice1 = floor(random(1, 7))
  const dice2 = floor(random(1, 7))

  drawDomino(dice1, dice2)
}

function drawDice(dice: number) {
  const dicePointDiameter: number = 30; // Size of a dot
  const diceSize = 200; // size of dice (width and height)

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

function drawDomino(dice1: number, dice2: number) {
  const diceSize = 200
  fill("black")
  noStroke()

  rect(0, 0, diceSize, diceSize)
  rect(diceSize, 0, diceSize, diceSize)

  //Erstes Quadrat
  drawDice(dice1)

  //Zweites Quadrat
  translate(diceSize, 0)
  drawDice(dice2)
}