const SIZE = 400;  // Canvas size (square)
const MARGIN = 25; // Margin between the edges and the rays.
                   // This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
}


function mouseMoved() {
  background("black");
  stroke("lime")
  strokeWeight(2);

  let a = MARGIN
  while (a < SIZE) {
    line(a, MARGIN, mouseX, mouseY)
    a += MARGIN
  }

  stroke("yellow")
  let b = MARGIN
  while (b < SIZE) {
    line(SIZE - MARGIN, b, mouseX, mouseY)
    b += MARGIN
  }

  stroke("lime")
  let c = MARGIN
  while (c < SIZE) {
    line(c, SIZE - MARGIN, mouseX, mouseY)
    c += MARGIN
  }

  stroke("yellow")
  let d = MARGIN
  while (d < SIZE) {
    line(MARGIN, d, mouseX, mouseY)
    d += MARGIN
  }

}
