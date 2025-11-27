function setup() {
  createCanvas(300, 300);
}

const circleDiameter = 50;

let circleCenterX = 200;
let circleCenterY = 0;
let directionX = 2;
let directionY = 2;

function draw() {
  background("gold");

  stroke("white");
  strokeWeight(3);
  fill("lime");
  circle(circleCenterX, circleCenterY, circleDiameter);

  circleCenterX += directionX;
  circleCenterY += directionY;

  if (circleCenterY >= height || circleCenterY <= 0) {
    directionY *= -0.8; 
  }

  if (circleCenterX >= width || circleCenterX <= 0) {
    directionX *= -0.8;
  }
}
