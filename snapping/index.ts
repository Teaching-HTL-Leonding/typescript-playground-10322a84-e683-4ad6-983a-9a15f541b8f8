function setup() {
  createCanvas(500, 500);
  background("lightblue");
}

function mouseMoved() {
  const SNAP = 40; // marker must snap every 40 pixels
  const MARKER_SIZE = 10; // size of marker

  background("lightblue");

  const x = round (mouseX / SNAP) * SNAP;
  const y = round (mouseY / SNAP) * SNAP;

  stroke("black")
  strokeWeight(3)
  line(x - MARKER_SIZE, y, x + MARKER_SIZE, y);
  line(x, y - MARKER_SIZE, x, y + MARKER_SIZE);

  noStroke();
  fill("black");
  textSize(30);
  textAlign(RIGHT);
  text(`x=${x}, y=${y}`, width - 190, height - 5);
}
