const DIAMETER = 80

function setup() {
  createCanvas(500, 500)
  background("white")

  fill("lightgreen")
  stroke("black")
  circle(400, 150, DIAMETER)
  circle(350, 100, DIAMETER)
  circle(300, 150, DIAMETER)
  circle(350, 200, DIAMETER)

  fill("yellow")
  stroke("yellow")
  circle(350, 150, 65)
  
  fill("darkgreen")
  arc()

}
