const circles_x: number[] = [];
const circles_y: number[] = [];
const circles_diameter: number[] = [];

let waiting_time = 3000;
let circle_interval: number;
let level_interval: number;

let points = 0;

function setup() {
  createCanvas(300, 300);

  addRandomCircle()
  setInterval(addRandomCircle, 3000)
}

function draw() {
  background("black");

  for (let i = 0; i < circles_x.length; i++) {
    circle(circles_x[i], circles_y[i], circles_diameter[i]);
  }
}

function addRandomCircle() {
  const center_x = random(width)
  const center_y = random(height)
  const diameter = random(10, 50)
  circle(center_x, center_y, diameter)

  circles_x.push(center_x);
  circles_y.push(center_y);
  circles_diameter.push(diameter);
}