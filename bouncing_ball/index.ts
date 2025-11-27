function setup() {
  createCanvas(300, 300);
}

const circleDiameter = 50;
const circleDiameter2 = 50;

let circleCenterX = 150;
let circleCenterY = 0;
let directionX = 2;
let directionY = 2;

let circleCenterX2 = 150;
let circleCenterY2 = 300;
let directionX2 = 2;
let directionY2 = 2;

function draw() {
  background("gold");

  stroke("white");
  strokeWeight(3);
  fill("lime");
  circle(circleCenterX, circleCenterY, circleDiameter);

  circleCenterX += directionX;
  circleCenterY += directionY;

  if (circleCenterY >= height || circleCenterY <= 0) {
    directionY *= -1;
  }

  if (circleCenterX >= width || circleCenterX <= 0) {
    directionX *= -1;
  }





  stroke("white");
  strokeWeight(3);
  fill("aqua");
  circle(circleCenterX2, circleCenterY2, circleDiameter2);

  circleCenterX2 += directionX2;
  circleCenterY2 += directionY2;

  if (circleCenterY2 >= height || circleCenterY2 <= 0) {
    directionY2 *= -1;
  }

  if (circleCenterX2 >= width || circleCenterX2 <= 0) {
    directionX2 *= -1;
  }

}
