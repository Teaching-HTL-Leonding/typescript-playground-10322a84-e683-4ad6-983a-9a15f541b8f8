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
  circle_interval = setInterval(addRandomCircle, waiting_time)
  level_interval = setInterval(change_level_interval, 10000)
}

function change_level_interval() {
  waiting_time /= 2

  clearInterval(circle_interval)
  circle_interval = setInterval(addRandomCircle, waiting_time)
}

function draw() {
  background("black");

  for(let i = 0; i < circles_x.length; i++) {
    noFill()
    stroke("white")
    strokeWeight(2)

    circle(circles_x[i], circles_y[i], circles_diameter[i])
  }

  fill("white")
  strokeWeight(0)
  textAlign(CENTER)
  textSize(25)
  text(`Points: ${points}`, 60, 30)

  gameover()
}

function addRandomCircle() {
  const center_x = random(width)
  const center_y = random(height)
  const diameter = random(10, 50)

  circles_x.push(center_x)
  circles_y.push(center_y)
  circles_diameter.push(diameter)
}

function isInside(x: number, y: number, circle_index) {
  let xi = circles_x[circle_index] - x
  let yi = circles_y[circle_index] - y

  let zi = sqrt(xi * xi + yi * yi)

  if(zi <= circles_diameter[circle_index] / 2)  {
    return true
  } else {
    return false
  }
}

function mouseClicked() {

  for(let i = 0; i < circles_x.length; i++) {
    let isInsideCircle = isInside(mouseX, mouseY, i)

    if(isInsideCircle == true) {
      circles_x.splice(i, 1)
      circles_y.splice(i, 1)
      circles_diameter.splice(i, 1)

      points += 1
    }
  }

}

function gameover() {
  if(circles_x.length > 10) {
    clearInterval(circle_interval)
    clearInterval(level_interval)

    background("black")
    fill("yellow")
    text(`Game over, Final Score: ${points}`, 150, 150)
  }
}