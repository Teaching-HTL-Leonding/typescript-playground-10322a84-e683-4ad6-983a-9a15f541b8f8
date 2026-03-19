function setup() {
  createCanvas(200, 200);
  background("lightgray");

  const diceSize = 200; // size of the square (width and height)

  const symbol = Math.floor(random(1, 7));

  // draw black background
  fill("black");
  noStroke();
  rect(0, 0, diceSize, diceSize);

  const centerX = diceSize / 2;
  const centerY = diceSize / 2;
  const size = 80;


  // TODO: Use a switch statement to draw different symbols based on the value of symbol
  // 1: Square
  // 2: Circle
  // 3: Triangle
  // 4: Star emoji ⭐
  // 5: Heart emoji ❤️
  // 6: Lucky charm emoji 🍀



  let message: string
  stroke("white")
  strokeWeight(2)
  rectMode(CENTER)

  switch(symbol) {
    case 1: rect(centerX, centerY, 80, 80)
    break

    case 2: circle(centerX, centerY, 80)
    break

    case 3: triangle(width/2, height/2 - 30, width/2 + 30, height/2 + 30, width/2 - 30, height/2 + 30)
    break

    case 4: message = "⭐"
    break

    case 5: message = "❤️"
    break

    case 6: message = "🍀"
    break
  }

  fill("white")
  textAlign(CENTER)
  textSize(70)
  text(message, width/2, height/2)
}