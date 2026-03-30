function setup() {
  createCanvas(400, 200);
  background("lightgray");

  const s1 = floor(random(1, 7))
  const s2 = floor(random(1, 7))
  drawDomino(s1, s2)
}

function drawSymbol(symbol: number) {
  const diceSize = 200; // size of the square (width and height)

  // draw black background
  fill("black");
  noStroke();
  rect(0, 0, diceSize, diceSize);

  const centerX = diceSize / 2;
  const centerY = diceSize / 2;
  const size = 80;

  // draw symbol
  switch (symbol) {
    case 1:
      // Square
      fill("white");
      stroke("white");
      strokeWeight(2);
      rectMode(CENTER);
      rect(centerX, centerY, size, size);
      rectMode(CORNER);
      break;
    case 2:
      // Circle
      fill("white");
      noStroke();
      circle(centerX, centerY, size);
      break;
    case 3:
      // Triangle
      fill("white");
      stroke("white");
      strokeWeight(2);
      triangle(
        centerX, centerY - size / 2,
        centerX - size / 2, centerY + size / 2,
        centerX + size / 2, centerY + size / 2
      );
      break;
    case 4:
      // Star emoji ⭐
      textAlign(CENTER, CENTER);
      textSize(size);
      text("⭐", centerX, centerY);
      break;
    case 5:
      // Heart emoji ❤️
      textAlign(CENTER, CENTER);
      textSize(size);
      text("❤️", centerX, centerY);
      break;
    case 6:
      // Lucky charm emoji 🍀
      textAlign(CENTER, CENTER);
      textSize(size);
      text("🍀", centerX, centerY);
      break;
  }
}

function drawDomino(s1: number, s2: number) {
  const diceSize = 200
  fill("black")
  noStroke()

  rect(0, 0, diceSize, diceSize)
  rect(diceSize, 0, diceSize, diceSize)

  //Erstes Quadrat
  drawSymbol(s1)

  //Zweites Quadrat
  push()
  translate(diceSize, 0)
  drawSymbol(s2)
  pop()

  //Trennstrich Mitte
  stroke("white")
  strokeWeight(5)
  line(200, 30, 200, 170)

  //Rahmen
  stroke("lightgrey")
  strokeWeight(15)
  line(0, 0, 400, 0)
  line(400, 0, 400, 200)
  line(400, 200, 0, 200)
  line(0, 200, 0, 0)
}