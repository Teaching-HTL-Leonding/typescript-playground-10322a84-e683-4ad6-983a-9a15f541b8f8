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
    a += 25
  }

  let b = 25
  while (b < 400) {
    line(375, b, mouseX, mouseY)
    b += 25
  }

  let c = 25
  while (c < 400) {
    line(c, 375, mouseX, mouseY)
    c += 25
  }

  let d = 25
  while (d < 400) {
    line(25, d, mouseX, mouseY)
    d += 25
  }

}
