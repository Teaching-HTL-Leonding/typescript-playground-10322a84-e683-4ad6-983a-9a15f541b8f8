const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Margin between the edges and the rays.
// This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(1);
  stroke("lime");

  let a = MARGIN
  for (a = MARGIN; a < SIZE; a += MARGIN) {
    line(SIZE - MARGIN, MARGIN, MARGIN, a)
  }

  let b = MARGIN
  for (b = MARGIN; b < SIZE; b += MARGIN) {
    line(MARGIN, MARGIN, SIZE - MARGIN, b)
  }

  let c = MARGIN
  for (c = MARGIN; c < SIZE; c += MARGIN) {
    line(MARGIN, SIZE - MARGIN, SIZE - MARGIN, c)
  }

  let d = MARGIN
  for (d = MARGIN; d < SIZE; d += MARGIN) {
    line(SIZE - MARGIN, SIZE - MARGIN, MARGIN, d)
  }






}
