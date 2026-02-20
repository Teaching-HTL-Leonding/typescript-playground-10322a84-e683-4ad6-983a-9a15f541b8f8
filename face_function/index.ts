let ishappy = false

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);

  //erstes Gesicht: immer happy
  smile(true);
}


function smile(happy: boolean) {
  const x = random(width);
  const y = random(height);

  // Kopf
  if (happy) {
    fill("yellow");
  } else {
    fill("green")
  }
  circle(x, y, 80);

  // Augen
  fill("black");
  circle(x - 15, y - 10, 8);
  circle(x + 15, y - 10, 8);

  // Mund (erst mal nur happy)
  noFill()
  stroke("black")
  strokeWeight(2)


  if (happy) {
    arc(x, y + 10, 40, 30, 0, 180); //lachend
  } else {
    arc(x, y + 20, 40, 30, 180, 360) //traurig
  }

}

function mouseClicked() {
  // Step 2: bei jedem Klick ein neues Gesicht
  // smile(true);


  // Step 3:
  smile(ishappy)
  ishappy = !ishappy
}