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

  let a = 25
  while (a < 400) {
    line(a, MARGIN, mouseX, mouseY)
    a += MARGIN
  }

  stroke("yellow")
  let b = 25
  while (b < 400) {
    line(SIZE - MARGIN, b, mouseX, mouseY)
    b += MARGIN
  }

  stroke("lime")
  let c = 25
  while (c < 400) {
    line(c, SIZE - MARGIN, mouseX, mouseY)
    c += MARGIN
  }

  stroke("yellow")
  let d = 25
  while (d < 400) {
    line(MARGIN, d, mouseX, mouseY)
    d += MARGIN
  }

}
