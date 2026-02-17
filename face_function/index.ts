function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);

  // Function CALL
  // +------------------------------ Function name
  // |  +--------------------------- Function parameter
  // v  v
  smile(true);
}

// Function DEFINITION
//       +-------------------------- Function name
//       |     +-------------------- Parameter name
//       |     |      +------------- Parameter type
//       v     v      v
function smile(happy: boolean) {


  const x = random(width);
  const y = random(height);

  // Kopf
  fill("yellow");
  circle(x, y, 80);

  // Augen
  fill("black");
  circle(x - 15, y - 10, 8);
  circle(x + 15, y - 10, 8);

  // Mund (erst mal nur happy)
  noFill()
  stroke("black")
  strokeWeight(2)
  arc(x, y + 10, 40, 30, 0, 180);
}
