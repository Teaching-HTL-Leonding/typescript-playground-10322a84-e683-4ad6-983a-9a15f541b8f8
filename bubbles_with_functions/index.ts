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
  //setInterval(addRandomCircle, 3000)
}

function draw() {
  background("black")

  for (let i = 0; i < circles_x.length; i++) {
    circle(circles_x[i], circles_y[i], circles_diameter[i]);
  }
}


function addRandomCircle() {
  const center_x = random(width)
  const center_y = random(height)
  const diameter = random(10, 50)

  circles_x.push(center_x);
  circles_y.push(center_y);
  circles_diameter.push(diameter);
}

function isInside(x: number, y: number, circle_index: number): boolean {
  let xi = circles_x[0] - x
  let yi = circles_y[0] - y

  let zi = sqrt(xi * xi + yi * yi)

  if (zi <= circles_diameter[circle_index] / 2) {
    return true
  } else {
    return false
  }
}

function mouseClicked() {
  /*
  if(m < circles_diameter[circle_index] / 2) {
    console.log("mouseclick war im kreis")
  }
  */

  console.log("Maus wurde betätigt")

  let isInsideTemp = isInside(mouseX, mouseY, 0)

  if(isInsideTemp == true) {
    console.log("Mausklick ist im Kreis")
  }
  else {
    console.log("Mausklick ist nicht im Kreis")
  }


}