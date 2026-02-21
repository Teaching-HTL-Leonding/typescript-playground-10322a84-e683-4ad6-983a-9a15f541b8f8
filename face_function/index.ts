let ishappy = false

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);

  smile(true);
}


function smile(happy: boolean) {
  const x = random(width)
  const y = random(height)

  //Kopf
  if (happy) {
    fill("yellow") //lachend
  } else {
    fill("lime") //trazrig
  }
  circle(x, y, 80)

  //Augen
  fill("black")
  circle(x-15, y-10, 8)
  circle(x+15, y-10, 8)

  //Mund
  noFill()
  strokeWeight(2)
  if(happy) {
    arc(x, y + 10, 40, 30, 0, 180) //lachend
  } else {
    arc(x, y + 20, 40, 30, 180, 360) //traurig
  }
}

function mouseClicked() {
  smile(ishappy)
  ishappy = !ishappy
}